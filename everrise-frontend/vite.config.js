import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures your assets (CSS/Images) load correctly on GitHub Pages
  base: '/EveriseTower/', 
})