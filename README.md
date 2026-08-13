# Portfolio Site

A static, categorized portfolio site: **CoreML / Agentic / MLOps / System
Design / Forward-Deployed**, each with **Blogs / Technical Content /
Publications / Projects / Design Documents**. Includes a homepage Loom
intro and a client-side search box that retrieves your own writing.

No build step, no framework, no dependencies beyond two Google Fonts —
this is plain HTML/CSS/JS so it runs directly on GitHub Pages.

## File structure

```
index.html          Homepage (Loom intro, category index, search)
category.html        One template for all 5 category pages (?cat=slug)
css/style.css         All styling
js/content.js         <-- EDIT THIS to add your real content
js/main.js             Rendering + search logic (shouldn't need edits)
```

## Adding your content

Open `js/content.js`. Two things live there:

1. **`SITE`** — your name, role, tagline, Loom embed URL, GitHub/LinkedIn/email.
2. **`ENTRIES`** — one object per piece of content (write-up, article, design
   doc, project). Placeholder entries are already seeded for everything
   listed in the brief (8 algorithmic write-ups, the week-1 agentic design,
   the week-2/3 dev.to articles, the week-3 system design, the week-5 MLOps
   project). Replace the placeholder title/summary/link/date in each, and
   flip `status` from `"todo"` to `"live"` once real content is linked in.

To add something new, duplicate any entry object in `ENTRIES` and fill it
in — `category` must match a slug in `CATEGORIES`, `section` must exactly
match one of the five section names. Nothing else needs to change; both
the category pages and the search box read straight from this array.

### Loom video

Replace `SITE.loomEmbedUrl` in `content.js` with your real Loom **embed**
URL (Loom → Share → Embed → copy the `src`). It should look like
`https://www.loom.com/embed/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`.

## Search box

The search box on the homepage is a small retrieval model that runs
entirely in the browser: TF-IDF term weighting + cosine similarity over
every entry's title, summary, tags, category, and section. No API key,
no backend, works on static GitHub Pages. It will get more useful as you
fill in real summaries — right now it's indexing placeholder text.

## Deploying to GitHub Pages

1. Create a repo named exactly `<your-github-username>.github.io`.
2. Push these files to the root of that repo's `main` branch:
   ```
   git init
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git push -u origin main
   ```
3. In the repo's **Settings → Pages**, set the source to `main` /
   `/ (root)` (GitHub usually detects and enables this automatically for
   a `<username>.github.io` repo).
4. Your site will be live at `https://<username>.github.io` within a
   few minutes.
5. Paste that link in your Discord submission.

## Local preview

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.
