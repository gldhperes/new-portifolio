import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/new-portifolio/',
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory
    rollupOptions: {
      external: ['react-router-dom'],
    }
  }
})
