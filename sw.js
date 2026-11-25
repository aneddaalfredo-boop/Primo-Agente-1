/* Service worker della Lampada delle Parole.
   Fa funzionare l'app anche senza connessione e la rende installabile.

   Come si aggiorna:
   - quando pubblichi un nuovo index.html, il service worker se ne accorge da solo
     (confronta la copia salvata con quella sul sito) e l'app propone «Aggiorna»;
   - cambia VERSION solo quando aggiungi, rinomini o togli file dall'elenco SHELL. */
const VERSION = 'lampada-2026-11-25';
const FONT_CACHE = 'lampada-fonts';
const SHELL = [
  './index.html',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Alegreya+Sans:wght@400;500;700;800&family=Grenze+Gotisch:wght@500;700&display=swap';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })));
    try { await cacheFonts(); } catch (e) { /* i caratteri arriveranno alla prossima visita */ }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== VERSION && k !== FONT_CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'lampada-fonts') event.waitUntil(cacheFonts().catch(() => {}));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === 'https://fonts.googleapis.com') { event.respondWith(staleWhileRevalidate(req, FONT_CACHE, event)); return; }
  if (url.origin === 'https://fonts.gstatic.com') { event.respondWith(cacheFirst(req, FONT_CACHE)); return; }
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope).pathname;
  const isPage = req.mode === 'navigate' && (url.pathname === scope || url.pathname === scope + 'index.html');
  if (isPage) { event.respondWith(page(event)); return; }
  event.respondWith(cacheFirst(req, VERSION));
});

/* La pagina: si mostra subito la copia salvata (funziona offline) e intanto si controlla
   se sul sito ce n'è una nuova; se è cambiata, la si salva e si avvisa l'app. */
async function page(event) {
  const cache = await caches.open(VERSION);
  const cached = await cache.match('./index.html');
  const oldText = cached ? cached.clone().text() : null; // copia letta subito: l'originale va alla pagina
  const fresh = fetch(event.request, { cache: 'no-cache' }).then(async res => {
    const html = res && res.ok && res.type === 'basic' && (res.headers.get('content-type') || '').includes('text/html');
    if (html) {
      const copy = res.clone();
      if (cached) {
        const [a, b] = await Promise.all([oldText, copy.clone().text()]);
        if (a !== b) { await cache.put('./index.html', copy); await notify(event); }
      } else {
        await cache.put('./index.html', copy);
      }
    }
    return res;
  }).catch(() => null);
  if (cached) { event.waitUntil(fresh); return cached; }
  const res = await fresh;
  return res || new Response('<!doctype html><meta charset="utf-8"><title>Offline</title><p style="font:18px sans-serif;padding:24px">Sei offline e la Lampada non è ancora stata salvata su questo dispositivo. Aprila una volta con la connessione attiva.</p>',
    { status: 503, headers: { 'content-type': 'text/html; charset=utf-8' } });
}

/* Avvisa le pagine aperte. La pagina che si sta aprendo proprio adesso non esiste ancora:
   la si aspetta (fino a 10 secondi) e la si avvisa appena è pronta. */
async function notify(event) {
  const msg = { type: 'lampada-update' };
  const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  list.forEach(c => c.postMessage(msg));
  const id = event && (event.resultingClientId || event.clientId);
  if (!id) return;
  for (let i = 0; i < 20; i++) {
    const c = await self.clients.get(id);
    if (c) { c.postMessage(msg); return; }
    await new Promise(r => setTimeout(r, 500));
  }
}

async function cacheFirst(req, name) {
  const cache = await caches.open(name);
  const hit = await cache.match(req, { ignoreSearch: name === VERSION });
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (e) {
    return new Response('', { status: 504 });
  }
}

async function staleWhileRevalidate(req, name, event) {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  const net = fetch(req).then(res => { if (res && res.ok) cache.put(req, res.clone()).catch(() => {}); return res; }).catch(() => null);
  if (hit) { event.waitUntil(net); return hit; }
  return (await net) || new Response('', { status: 504 });
}

/* Salva i caratteri della pagina (solo alfabeto latino) per usarli senza connessione. */
async function cacheFonts() {
  const cache = await caches.open(FONT_CACHE);
  let res = await cache.match(FONT_CSS);
  if (!res) {
    res = await fetch(FONT_CSS, { mode: 'cors', credentials: 'omit' });
    if (!res.ok) return;
    await cache.put(FONT_CSS, res.clone());
  }
  const css = await res.text();
  const urls = [];
  css.split('/*').forEach(block => {
    const m = /^\s*([a-z-]+)\s*\*\//.exec(block);
    if (!m || (m[1] !== 'latin' && m[1] !== 'latin-ext')) return;
    const u = /url\((https:[^)]+)\)/.exec(block);
    if (u) urls.push(u[1]);
  });
  await Promise.all(urls.map(async u => {
    if (await cache.match(u)) return;
    try { const r = await fetch(u, { mode: 'cors', credentials: 'omit' }); if (r.ok) await cache.put(u, r); } catch (e) { /* riproverà */ }
  }));
}
