// @ts-check
import { defineConfig } from 'astro/config';

const site = 'https://sore-ie.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
});
