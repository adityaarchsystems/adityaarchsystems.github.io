// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://adityaarchsystems.github.io',
  legacy: {
    collectionsBackwardsCompat: true
  },
  vite: {
    // @ts-expect-error - Tailwind v4 Vite plugin TS mismatch with Astro 5
    plugins: [tailwindcss()],
  },
});
