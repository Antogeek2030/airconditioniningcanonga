import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://airconditioningrepaircanongaparkca.us',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory'
  },
  trailingSlash: 'never'
});
