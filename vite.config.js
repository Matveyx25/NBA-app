import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	css: {
    preprocessorOptions: {
        scss: {
            additionalData: '@import "@/styles/variables";',
        },
    },
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
