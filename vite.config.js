import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression2';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
})