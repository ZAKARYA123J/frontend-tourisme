import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Useful in some environments like Docker
      interval: 1000,  // Adjust the polling interval
      ignored: ['**/node_modules/**', '**/.git/**'], // Ignore unnecessary directories
    },
  },
});