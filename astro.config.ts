import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://adityaarchsystems.github.io',
  legacy: {
    collectionsBackwardsCompat: true
  },
  vite: {
    plugins: [tailwindcss() as any],
  },
});
