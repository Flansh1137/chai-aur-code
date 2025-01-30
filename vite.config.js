import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      external: ['react-datepicker']
    },
    commonjsOptions: {
      include: [/node_modules/], // Ensures compatibility with CommonJS modules
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5000, // Only used in local development
  },
});
