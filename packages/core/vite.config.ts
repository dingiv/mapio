import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { } from 'vitest'

export default defineConfig({
   resolve: {
      alias: {
         '@': resolve(__dirname, 'src')
      }
   },
   build: {
      lib: {
         entry: resolve(__dirname, 'src/index.ts'),
         formats: ['es', 'cjs'],
         fileName: (format) => `core.${format}.js`
      },
   },
   test: {
      include: ['./tests/**/*.test.ts']
   }
})