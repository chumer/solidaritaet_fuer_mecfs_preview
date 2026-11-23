# Solidarität für ME/CFS – Website

Statische Website ohne Build-Schritt: HTML + eine CSS-Datei. Läuft direkt auf GitHub Pages
oder jedem Webspace. Zum Ansehen einfach `index.html` im Browser öffnen.

## Aufbau

```
index.html             Startseite (alle Abschnitte, Anker wie #aktionen, #spenden)
rueckblick-2026.html   Rückblick auf den Aktionstag 2026
betroffene.html        Berichte von Betroffenen
impressum.html         Impressum
datenschutz.html       Datenschutzerklärung
favicon.ico
assets/
  css/main.css         gesamtes Styling (Farben, Schriften, Bausteine, Mobil-Regeln)
  js/main.js           Menü-Knopf für Handy und Tablet (einziges Skript)
  fonts/               Montserrat + Atkinson Hyperlegible, lokal (SIL Open Font License)
  img/                 Logos, Flyer, QR-Code
  video/               Videos + Vorschaubilder
```

Es werden keine externen Dienste geladen (keine Google Fonts, kein Tracking, keine Einbettungen).

## Häufige Änderungen

- **Farben / Schriften:** ganz oben in `assets/css/main.css` unter „Variablen“ (`--accent`, `--ink` …).
- **Neue Aktion:** in `index.html` im Abschnitt `#aktionen` einen `<article class="event">`-Block
  kopieren. Vergangene Aktionen bekommen zusätzlich `event--past` und wandern unter „Vergangene Aktionen“.
  Flyer nach `assets/img/` legen.
- **Kooperation / Sponsor:** Block `.partner` bzw. `.sponsor` kopieren, Logo nach `assets/img/`.
  Die Logohöhe in Kooperationen lässt sich pro Logo mit `style="--logo-height: 60px"` anpassen (Standard 56px).
- **Icons:** einmal oben in `index.html` als `<symbol>` definiert, eingesetzt mit
  `<svg class="icon" width="20" height="20"><use href="#icon-clock"/></svg>`.
- **Kopf- und Fußbereich** sind auf allen fünf Seiten gleich – Änderungen bitte überall nachziehen.

## CSS-Aufbau

Klassennamen nach dem Muster `block__element--variante` (z. B. `event__title`, `event--past`).
Die Datei ist in Abschnitte gegliedert: Schriften, Variablen, Basis, Layout, Kopf & Fuß,
Bausteine, Abschnitte der Startseite, Unterseiten, Tablet & Handy.
Ab 960 px Breite abwärts wird die Navigation zum Menü-Knopf, ab 720 px greift das Handy-Layout
(kompakter, mitlaufender Kopfbereich, kleinere Abstände und Überschriften).

## Veröffentlichen mit GitHub Pages

Inhalt dieses Ordners ins Repository legen → Settings → Pages → Branch `main`, Ordner `/ (root)`.
Für die eigene Domain eine Datei `CNAME` mit `solidaritaetfuermecfs.com` anlegen und beim
Domain-Anbieter auf GitHub Pages zeigen lassen.
