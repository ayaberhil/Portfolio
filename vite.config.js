import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunking to split large libraries into separate files
        manualChunks: {
          // Splitting three.js into its own chunk
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Splitting React-related dependencies into their own chunk
          react: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          // Optional: split other large libraries (e.g., for Lottie, etc.)
        },
      },
    },
  },
})
