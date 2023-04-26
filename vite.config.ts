import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // ignore TypeScript errors during build
  optimizeDeps: {
    include: ['axios'],
    exclude: ['lodash-es']
  },
})
