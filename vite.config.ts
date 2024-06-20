/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9000,
  },
  optimizeDeps: {
    exclude: ['@fortawesome/*']
  },
  define: {
    'process.env': {
      VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
      VITE_GRAFANA_URL: process.env.VITE_GRAFANA_URL,
      VITE_DEFAULT_DASHBOARD_GRAFANA_ID: process.env.VITE_DEFAULT_DASHBOARD_GRAFANA_ID,
    }
  }
})