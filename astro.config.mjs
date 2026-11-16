// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

 site: 'https://suleymandoan.github.io/benim-site/',
 base: '/Distro',
  
  vite: {
    plugins: [tailwindcss()]
  }
});
