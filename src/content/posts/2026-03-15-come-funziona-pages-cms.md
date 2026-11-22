---
title: "Come funziona Pages CMS con Astro"
description: "Una panoramica pratica su come collegare questo repository GitHub a Pages CMS e iniziare a modificare testi, collezioni e media."
pubDate: 2026-03-15
category: "Guide"
tags:
  - pages-cms
  - astro
  - git-cms
cover: "/media/cover-cms.svg"
featured: true
draft: false
---

**Pages CMS** è un CMS leggero e open-source che si appoggia direttamente al tuo repository GitHub. Non richiede un database separato: ogni salvataggio crea semplicemente un commit nel repo.

## Cosa puoi testare in questo minisito

Il file `.pages.yml` nella root del progetto è già configurato per permetterti di provare tutte le funzionalità principali:

1. **Collezione Articoli Blog** (`src/content/posts`): campi testo, date, categorie `select`, liste di tag, toggle bozza/evidenza, immagine di copertina ed editor *rich-text*.
2. **Collezione Progetti** (`src/content/projects`): una seconda collezione con campi numerici, stato del progetto e lista di punti chiave.
3. **File singolo Markdown** (`src/content/pages/about.md`): ideale per pagine fisse come *Chi Siamo*.
4. **File JSON globale** (`src/data/site.json`): oggetti annidati e liste per modificare hero, autore e link social.
5. **Libreria Media** (`public/media`): carica nuove immagini e usale subito nei tuoi post.

## Prova subito

Modifica questo articolo dall'interfaccia di Pages CMS, salva le modifiche e osserva il nuovo commit apparire su GitHub. Se hai collegato il repo a Cloudflare Pages, Netlify o Vercel, il sito si aggiornerà automaticamente in pochi secondi.
