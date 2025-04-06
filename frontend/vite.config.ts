import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',                         // Root is the frontend folder
  base: '/',                       // ✅ Set base path to match FastAPI route
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://render-1-i0pe.onrender.com',  // Backend FastAPI
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'           // Use the correct entry point
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
