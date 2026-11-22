# Astro + Pages CMS — Minisito di test

Un minisito statico realizzato con **Astro 5** e preconfigurato con `.pages.yml` per testare tutte le principali funzionalità di [Pages CMS](https://pagescms.org/) su GitHub.

## Cosa include `.pages.yml`

- **Media (`public/media` → `/media`)**: libreria immagini con asset di esempio già pronti.
- **Articoli Blog (`src/content/posts`)**: collezione Markdown con titolo, descrizione, data, categoria (`select`), lista di tag, copertina (`image`), toggle `featured` e `draft`, editor `rich-text`.
- **Progetti (`src/content/projects`)**: seconda collezione con anno (`number`), stato (`select`), link esterno, lista punti chiave e `rich-text`.
- **Pagina Chi Siamo (`src/content/pages/about.md`)**: file Markdown singolo (`type: file`).
- **Impostazioni Sito (`src/data/site.json`)**: file JSON globale con oggetti annidati (`hero`, `author`) e liste di oggetti (`social`).

## Sviluppo locale

```bash
npm install
npm run dev
```

Build statica di produzione:

```bash
npm run build
npm run preview
```

## Come testarlo con Pages CMS

1. Crea un nuovo repository su GitHub e fai push di questo progetto:
   ```bash
   git remote add origin https://github.com/<tuo-utente>/<nome-repo>.git
   git branch -M main
   git push -u origin main
   ```
2. Vai su [app.pagescms.org](https://app.pagescms.org/) e accedi con il tuo account GitHub.
3. Autorizza l'accesso al repository appena creato e selezionalo.
4. Pages CMS leggerà automaticamente `.pages.yml` e ti mostrerà collezioni, pagine, impostazioni JSON e media pronti da modificare.
5. *(Opzionale)* Collega lo stesso repository a **Cloudflare Pages**, **Netlify** o **Vercel** (build command: `npm run build`, output directory: `dist`) per vedere ogni modifica fatta da Pages CMS pubblicata online automaticamente.
