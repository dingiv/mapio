import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
   resolve: {
      alias: {
         '@': resolve('./src')
      }
   },
   plugins: [dts()],
   build: {
      lib: {
         entry: './src/index.ts',
         formats: ['es'],
         fileName: `index`,
      },
      rollupOptions: {
      }
   }
})