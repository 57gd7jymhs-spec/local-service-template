// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // node:fs and node:path are used dev-only in admin-save.ts
      // nodejs_compat in wrangler.toml makes them available at runtime
      external: ['node:fs', 'node:path'],
    },
  }
});