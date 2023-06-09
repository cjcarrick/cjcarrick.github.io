import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      lib: path.resolve(process.cwd(), './lib'),
      '@': path.resolve(process.cwd(), './src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/globals.scss";`
      }
    }
  },

  plugins: [vue()]
})
