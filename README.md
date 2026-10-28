# wesleyveeningen portfolio

Plain HTML, CSS and JavaScript. No build step.

- `config.js`: all content (bio, projects, timeline, skills, links). Edit this file only.
- `index.html`: page structure and SEO tags
- `styles.css`: design; colours are the variables at the top (`--accent` changes the accent)
- `script.js`: rendering and effects

Run locally: `python3 -m http.server 4173`, then open http://localhost:4173

## Deploy

**Vercel**
1. Push this folder to a new GitHub repo, e.g. `portfolio`.
2. On vercel.com: Add New → Project → import the repo. Framework preset: "Other". No build command.
3. Click Deploy. Add your own domain under Settings → Domains if you want.

**GitHub Pages**
1. Push this folder to a repo named `WesleyVeeningen.github.io`.
2. Repo Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait a minute, then open https://wesleyveeningen.github.io
