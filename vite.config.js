import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true, // или host: '0.0.0.0'
    port: 5173
  },
  plugins: [react()]
})
