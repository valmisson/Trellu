import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store.js', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@datastore': fileURLToPath(new URL('./src/datastore/index.js', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils/index.js', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@routes': fileURLToPath(new URL('./src/routes', import.meta.url))
    }
  }
});
