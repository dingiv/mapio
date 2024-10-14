import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],

   build: {
      rollupOptions: {
         output: {
            manualChunks(path) {

               if (path.match(/redux/)) return 'redux'
            }
         }
      }
   }
})
