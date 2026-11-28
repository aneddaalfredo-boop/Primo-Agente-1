# Le app di Primo-Agente-1

Due app in italiano, ognuna in un solo file HTML, che si installano sul telefono e funzionano anche
senza internet:

| App | Indirizzo | Cartella |
| --- | --- | --- |
| **La Lampada delle Parole**: imparare l'italiano giocando | `https://aneddaalfredo-boop.github.io/Primo-Agente-1/` | `/` |
| **Praha Pilot**: Praga spendendo poco | `https://aneddaalfredo-boop.github.io/Primo-Agente-1/praha/` | `praha/` |

---

# La Lampada delle Parole

Un gioco per imparare l'italiano (livelli dall'A1 al B2) con Gennaro, il Genio della Lampada.
Tutta l'app sta in un solo file, `index.html`: si può aprire con un doppio clic oppure pubblicare
su un sito e installare sul telefono come una vera app, che funziona anche senza internet.

## Novità di questa versione

**App installabile e senza connessione**
- Si installa sul telefono e sul computer: icona propria e schermo intero.
- Dopo la prima apertura funziona anche offline, caratteri compresi.
- Quando pubblichi una nuova versione, l'app mostra il pulsante «Aggiorna».
- Scorciatoie dall'icona dell'app installata: Parola Magica, Grimorio, Pronuncia, Storie.

**Nuove attività**
- **Eco del Genio** (pronuncia): il Genio dice una parola o una frase e ti ascolta mentre la ripeti.
  Dà un punteggio e colora le parole dette bene. Ci sono parole, frasi, suoni difficili
  (doppie, GLI, GN, SC, R, CH/GH, Z) e scioglilingua. Se il browser non può ascoltare,
  puoi registrarti, riascoltarti e valutarti da solo.
- **Biblioteca delle Storie**: 12 racconti originali, 3 per livello. Ogni storia ha la lettura ad
  alta voce con la frase evidenziata, la traduzione in inglese, la spiegazione di ogni parola
  che tocchi e le domande di comprensione. Le parole nuove si possono mettere nel Grimorio.

**Più contenuti**
- Circa 190 parole nuove, soprattutto B1 e B2 (prima di livello B2 non ce n'era nessuna),
  e un nuovo tema: «Società e idee».
- Due nuovi esercizi, **Sinonimi** e **Connettivi**, presenti anche nel Quiz, in classe e in Arena.
- Duello Magico: **terzo capitolo**, «L'Arcipelago delle Tempeste», con 9 nuovi avversari.
- Torre Incantata: **nona stanza**, «L'Osservatorio delle Stelle», di livello B2.
- 8 nuovi trofei e 2 nuovi tipi di missione.

**Studio più efficace**
- **Obiettivo del giorno** (20, 50, 100 o 150 XP), con premio in gemme.
- **Parola del giorno** sulla mappa, da ascoltare, pronunciare e mettere nel Grimorio.
- **Libro degli errori**: le domande sbagliate tornano finché non le risolvi.
- **Allenamento mirato** sugli argomenti in cui sbagli di più (nel Quiz e nelle Statistiche).

**Profili, salvataggi e classe**
- Backup su file di tutti gli apprendisti, ripristino da file ed eliminazione di un apprendista.
- Salvataggio immediato quando l'app si chiude e opzione «Proteggi i progressi».
- Pannello Insegnante: liste di parole condivisibili con un link o un codice, importazione da
  file di testo o CSV.
- Modalità Classe: lo schermo resta acceso e c'è il pulsante «Schermo intero».
- Vibrazione sul telefono a ogni risposta (si può disattivare).

**Correzioni e accessibilità**
- Con il cielo «Tramonto» le stelline di valutazione del Duello e della Torre non sono più sbiadite.
- Il resoconto dello Scriba non è più impaginato in colonna centrata.
- Cambiando schermata durante il Genio Indovino, la Parola Magica o la Memoria, nessuna domanda
  ricompare sulla schermata nuova.
- Lettori di schermo: frasi del Genio lette una volta sola, focus sulla schermata nuova,
  finestre che trattengono il tasto Tab, testo inglese pronunciato in inglese, pulsanti di scelta
  che annunciano l'opzione attiva.
- I caratteri si caricano senza rallentare la prima schermata.

## Pubblicarla gratis con GitHub Pages

1. Nel repository su GitHub apri **Settings → Pages**.
2. In **Build and deployment** scegli **Source: Deploy from a branch**.
3. Scegli il ramo con l'app (per esempio `main`, dopo aver unito le modifiche), cartella **/ (root)**, e premi **Save**.
4. Dopo un paio di minuti l'app è online all'indirizzo `https://<nome-utente>.github.io/Primo-Agente-1/`.

## Installarla sul telefono

- **Android (Chrome):** apri l'indirizzo e tocca **Installa** (oppure menu ⋮ → «Installa app»).
- **iPhone e iPad (Safari):** tocca **Condividi** → «Aggiungi alla schermata Home».
- **Computer (Chrome o Edge):** clicca l'icona di installazione nella barra dell'indirizzo.

Lo stesso pulsante si trova anche nell'app, in **Impostazioni → App sul telefono e sul computer**.

## Buono a sapersi

- La pronuncia usa il riconoscimento vocale del browser: funziona con Chrome, Edge e Safari e ha
  bisogno di internet. Senza connessione resta disponibile la modalità «registra e confronta».
- La voce di Gennaro è quella del dispositivo. Nelle Impostazioni si può scegliere una voce
  italiana maschile, se il dispositivo ne ha una.
- I progressi restano sul dispositivo. Per non perderli, o per passare a un altro telefono,
  usa **Impostazioni → Dati → Salva un backup**.

## File

| File | A che cosa serve |
| --- | --- |
| `index.html` | L'app intera: grafica, giochi, contenuti |
| `sw.js` | Il service worker, che fa funzionare l'app senza connessione |
| `manifest.webmanifest` | Nome, colori e icone dell'app installata |
| `icons/` | Icone dell'app (`icon.svg` è il disegno originale) |
| `.nojekyll` | Dice a GitHub Pages di pubblicare i file così come sono |

Per aggiornare l'app basta sostituire `index.html`: chi la usa vedrà il pulsante «Aggiorna».
Il valore `VERSION` in `sw.js` va cambiato solo quando aggiungi, rinomini o togli dei file.

---

# Praha Pilot

La guida di Praga per studenti con poco budget: mappa 3D del centro, posti economici e gratis,
trappole da evitare, portafoglio, biglietti dei mezzi e SOS. Anche questa app sta in un solo file,
`praha/index.html`, e si installa sul telefono.

Indirizzo: `https://aneddaalfredo-boop.github.io/Primo-Agente-1/praha/`

## Novità di questa versione

**«Portami lì» apre direttamente le mappe**
- Su iPhone apre l'app Mappe con il percorso a piedi; su Android e sul computer apre Google Maps.
  Prima, su iPhone, il tocco non faceva nulla: il link cercava di aprire una nuova finestra e
  l'iPhone la bloccava.
- Il pulsante **⋯** accanto fa scegliere tra Mappe di Apple, Google Maps e Mapy.com (mappe ceche che
  funzionano anche offline), e permette di copiare o inviare il link. L'app preferita si può fissare
  anche in **Impostazioni → Navigazione**.
- Se la mappa non si apre (per esempio quando la pagina è dentro un'altra app), Praha Pilot lo dice
  e propone il link da copiare.

**App installabile**
- Icona propria (il quadrante dell'Orologio Astronomico), schermo intero e funzionamento senza
  internet dopo la prima apertura.
- Quando pubblichi una nuova versione compare il pulsante «Aggiorna».
- Scorciatoie dall'icona dell'app installata: Esplora, Portafoglio, Muoversi, SOS.

**Nuove funzioni**
- **Adesso a Praga**: ora e data, prossimo tramonto o alba, prossimo spettacolo degli apostoli
  all'Orologio Astronomico e meteo con le previsioni di 4 giorni e un consiglio su cosa fare.
- **Orari di apertura** sulle schede («Aperto · chiude alle 20:00», «Chiuso · apre domani alle 9:00»)
  e filtro **«Aperti adesso»**.
- **Preferiti** (il cuore) e **«Il mio giro»**: l'ordine più corto a piedi tra i posti salvati, con
  tempi e spesa, da aprire in Google Maps o Mapy.com. Sulla mappa compaiono le tappe numerate.
- **Scheda rapida sulla mappa**: tocca un segnaposto per vedere prezzo, distanza, orario, il nome in
  ceco da ascoltare e «Portami lì», senza perdere di vista la mappa.
- **Punto di ritrovo** per il gruppo (una bandierina sulla mappa) e **«Invia la mia posizione»**.
- **Dividi il conto**, con la mancia come si usa in Cechia.
- **Frasi in ceco da ascoltare** con la voce del telefono.
- **Tasso di cambio** aggiornato da solo con il tasso ufficiale della BCE (si può anche fissare a mano).
- **Cielo vero** sulla mappa: giorno, tramonto e notte secondo l'ora di Praga, con la luna nella
  fase giusta.

**Grafica e fluidità**
- Schede con le illustrazioni dei luoghi (Týn, Ponte Carlo, Castello, Orologio, Petřín…) e
  animazioni leggere, che si spengono se il telefono chiede meno movimento.
- Mappa più reattiva: risoluzione ridotta solo mentre la sposti, scorrimento con inerzia, nomi che
  non finiscono più sotto il cartello e la bussola. Resta fluida anche su telefoni lenti.

**Correzioni**
- Cambiando sezione la pagina non viene più disegnata due volte.
- Nelle finestre il tasto Esc le chiude, il tasto Tab resta dentro e, alla chiusura, si torna al
  pulsante da cui erano state aperte.
- Le risposte già salvate dall'Assistente usano il nuovo «Portami lì».
- I caratteri si caricano senza rallentare la prima schermata.

## Buono a sapersi

- Internet serve solo per aprire le mappe, cercare un indirizzo online, il meteo (Open-Meteo) e il
  tasso del giorno (BCE, tramite Frankfurter). Tutto il resto funziona anche senza connessione.
- Posizione, spese e preferiti restano sul telefono. La posizione esce solo se la invii tu.
- Il GPS funziona quando l'app è aperta dal suo indirizzo web (https), non come file.

## File di Praha Pilot

| File | A che cosa serve |
| --- | --- |
| `praha/index.html` | L'app intera: mappa, dati, funzioni |
| `praha/sw.js` | Il service worker: funzionamento offline e avviso degli aggiornamenti |
| `praha/manifest.webmanifest` | Nome, colori, icone e scorciatoie dell'app installata |
| `praha/icons/` | Icone (`icon.svg` è il disegno originale, `icon-maskable.svg` la versione a pieno campo per Android) |

Le due app convivono sullo stesso sito: ognuna ha il suo service worker e gestisce solo i propri file.
Per aggiornare Praha Pilot basta sostituire `praha/index.html`; il valore `VERSION` in `praha/sw.js`
va cambiato solo quando aggiungi, rinomini o togli dei file.
