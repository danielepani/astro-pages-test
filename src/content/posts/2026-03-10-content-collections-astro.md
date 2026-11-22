---
title: "Content Collections in Astro 5"
description: "Perché la Content Layer API di Astro si sposa benissimo con i CMS basati su Git e validazione automatica con Zod."
pubDate: 2026-03-10
category: "Tech"
tags:
  - astro
  - zod
  - static-site
cover: "/media/cover-astro.svg"
featured: false
draft: false
---

Con **Astro 5**, definire le collezioni di contenuti in `src/content.config.ts` permette di validare automaticamente ogni file Markdown creato o modificato da Pages CMS.

### Vantaggi principali

- **Tipizzazione completa**: ogni proprietà del frontmatter è verificata a build time.
- **Zero JavaScript inutile**: le pagine vengono pre-renderizzate come HTML pulito e velocissimo.
- **Resilienza ai campi opzionali**: lo schema è pensato per accettare valori vuoti o nulli senza bloccare la build quando un editor lascia un campo facoltativo in bianco.

> Suggerimento: prova a creare un nuovo articolo in Pages CMS attivando il toggle **Bozza** (`draft: true`) — vedrai che verrà automaticamente nascosto dal sito pubblico finché non lo pubblichi.
