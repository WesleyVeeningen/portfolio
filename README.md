# wesleyveeningen.nl

My personal portfolio site: who I am, what I'm building and where I've studied and worked.

**Live:** [wesleyveeningen.nl](https://wesleyveeningen.nl)

Plain HTML, CSS and JavaScript with no framework and no build step.

## Editing content

All content (bio, projects, timeline, skills and links) lives in `config.js`. Edit that file and reload the page; you don't need to touch the HTML.

| File | What's in it |
| --- | --- |
| `config.js` | All content |
| `index.html` | Page structure and SEO tags |
| `styles.css` | Design. Colours are the variables at the top; `--accent` changes the accent colour |
| `script.js` | Rendering and effects, like the scrambling tagline |

## Running it locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploying

The site is deployed on Vercel from this repo: every push to `main` goes live. It's a static site, so the Vercel project uses the "Other" framework preset with no build command.
