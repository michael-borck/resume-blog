# Resume Magazine

A magazine-style resume website built with Astro to showcase professional and personal content in an engaging format.

## Structure

The project organizes content into thematic sections:

- **About**: Personal profiles and background information
- **Projects**: Portfolio of professional and technical projects
- **Teaching**: Academic experience, courses taught, and teaching philosophy
- **Research**: Publications and research interests
- **Passions**: Personal interests and hobbies beyond work

## Development

This project uses Astro, a modern static site generator.

### Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## Deployment

This site is configured for GitHub Pages. After building the project, the static assets can be deployed to GitHub Pages.

```bash
npm run build
```

## Customization

Modify the theme by editing the CSS variables in `src/styles/global.css`.

## Content Management

Content is stored as Markdown files in the `docs/` directory. Each Markdown file contains frontmatter with metadata such as title, description, and categories.

Example:
```md
---
title: "My Project"
description: "Description of the project"
categories: [web, development]
---

Content here...
```