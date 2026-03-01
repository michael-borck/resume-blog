# Resume Blog Site

<!-- BADGES:START -->
[![blog](https://img.shields.io/badge/-blog-blue?style=flat-square)](https://github.com/topics/blog) [![github-pages](https://img.shields.io/badge/-github--pages-blue?style=flat-square)](https://github.com/topics/github-pages) [![jekyll](https://img.shields.io/badge/-jekyll-blue?style=flat-square)](https://github.com/topics/jekyll) [![magazine-theme](https://img.shields.io/badge/-magazine--theme-blue?style=flat-square)](https://github.com/topics/magazine-theme) [![minimal-mistakes](https://img.shields.io/badge/-minimal--mistakes-blue?style=flat-square)](https://github.com/topics/minimal-mistakes) [![resume](https://img.shields.io/badge/-resume-00bcd4?style=flat-square)](https://github.com/topics/resume) [![ruby](https://img.shields.io/badge/-ruby-cc342d?style=flat-square)](https://github.com/topics/ruby) [![markdown](https://img.shields.io/badge/-markdown-blue?style=flat-square)](https://github.com/topics/markdown) [![portfolio](https://img.shields.io/badge/-portfolio-blue?style=flat-square)](https://github.com/topics/portfolio) [![static-site](https://img.shields.io/badge/-static--site-blue?style=flat-square)](https://github.com/topics/static-site)
<!-- BADGES:END -->

This repository hosts a blog-article resume showcase built with Jekyll and the Minimal Mistakes theme, and is published on GitHub Pages from the `docs/` folder.

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