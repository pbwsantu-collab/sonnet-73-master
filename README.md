# Sonnet 73 Master (S73 Master)

**Read. Understand. Analyse. Remember.**

Interactive bilingual Progressive Web App for West Bengal Bengali-medium Class XII students studying William Shakespeare’s **Sonnet 73 (LXXIII)**.

## Features

- Full poem with **line-by-line analysis** and **clickable vocabulary**
- **English / বাংলা / BOTH** language modes
- **Simple mode** (Explain like Class V)
- Three central metaphors visualiser (Autumn · Twilight · Dying Fire)
- Literary devices, themes, critical appreciation
- Exam question bank (VSQ / Short / Broad) with bilingual answers
- **50+ MCQ quiz** with instant feedback and explanations
- Flashcards, revision modes, memory map
- Progress tracking + badges (LocalStorage)
- Offline PWA (Service Worker + Manifest)
- Search, notes, Web Speech API

## How to run

Open `index.html` in any modern browser (Chrome / Edge / Firefox / Safari).

For local server (recommended for PWA):

```bash
npx serve .
# or
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project structure

```
sonnet-73-master/
├── index.html          # Shell
├── styles.css          # Literary dark theme
├── data.js             # All educational content (poem, vocab, quiz…)
├── app.js              # UI logic, navigation, progress, quiz engine
├── sw.js               # Service Worker (offline)
├── manifest.json       # PWA manifest
├── favicon.svg
└── README.md
```

## Content source

Poem text and annotations follow the Class XII textbook material supplied for Sonnet 73 (pages 177–178), with additional pedagogical scaffolding for Bengali-medium learners.

## Extending to other texts

Educational content is isolated in `data.js`. To support another poem or prose piece, replace the data module and keep the same UI engine — the architecture is designed as a reusable **English Literature Master** shell.

## Licence

Educational use. Shakespeare’s works are in the public domain.
