/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '10.0.1.12',
    port: 9000,
  },
  optimizeDeps: {
    exclude: ['@fortawesome/*']
  }
})