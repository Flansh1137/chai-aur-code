import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ["react-datepicker"],
  },
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify output directory
    rollupOptions: {
      // Externalizing react-datepicker if needed
      external: ['react-datepicker'],  
    },
    chunkSizeWarningLimit: 1000, // To avoid warnings on large chunks
  },
  server: {
    port: 5000, // Only used during local development
  },
});
