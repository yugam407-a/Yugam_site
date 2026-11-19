import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' by default (for Vercel & local dev); use '/Yugam_light/' when building specifically for GitHub Pages
  base: process.env.GITHUB_PAGES === 'true' ? '/Yugam_light/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
