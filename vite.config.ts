import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// vite.config.ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/iteri-react/',
  build: {
    // Это заставит Vite собирать ассеты более надежно
    assetsInlineLimit: 0, // Не превращать маленькие картинки в base64
    rollupOptions: {
      output: {
        // Упрощаем структуру имен файлов в dist
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})