import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(), 
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      svg: { disabled: true },
    })
  ],
  build: {
    rollupOptions: {
      output: {
        ...(isSsrBuild ? {} : {
          manualChunks: {
            gsap: ['gsap'],
            lenis: ['lenis'],
          }
        })
      }
    }
  },
  ssr: {
    noExternal: ['gsap']
  }
}))
