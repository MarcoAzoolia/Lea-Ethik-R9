import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Lea-Ethik-R9/',
  plugins: [react(), tailwindcss()],
})
