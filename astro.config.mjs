import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michael-borck.github.io',
  base: '/resume-magazine',
  publicDir: './public',
  integrations: [],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'github-light',
      langs: [],
      wrap: true,
    },
  },
});