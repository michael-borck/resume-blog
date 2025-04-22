# Resume Magazine Site

This repository hosts a magazine‑style resume showcase built with Jekyll and the Minimal Mistakes theme, and is published on GitHub Pages from the `docs/` folder.

## Features
- Custom `resumes` collection (front‑matter, pretty permalinks)
- Home page with full‑width hero image
- Sample content and assets scaffolded
- Uses the Minimal Mistakes remote theme for a magazine look

## Setup & Local Development

### Prerequisites
- Ruby (>= 2.5)
- Bundler (`gem install bundler`)

### Install Dependencies
```bash
bundle install
```

### Serve Locally
Use Jekyll to serve the site from `docs/`, listening on all interfaces:
```bash
bundle exec jekyll serve \
  --source docs \
  --destination docs/_site \
  --host 0.0.0.0 \
  --port 4000
```

Browse to `http://<your-host>:4000` (e.g. `localhost:4000`).

## GitHub Pages Deployment
1. Push your code to the `main` branch.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment** → **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/docs`
4. Click **Save**. GitHub will build and publish your site automatically.

Ensure the `url:` and `baseurl:` in `docs/_config.yml` match your GitHub Pages URL.

## Content Structure
- **Home page:** `docs/index.md` (uses `home` layout)
- **Resumes collection:** `docs/_resumes/*.md`
- **Resumes index:** `docs/resumes/index.md` (uses `archive` layout)
- **Assets:** `docs/assets/images/…` and `docs/css/styles.css`

Add or replace Markdown files under `docs/_resumes/` (with front‑matter) to expand your magazine.