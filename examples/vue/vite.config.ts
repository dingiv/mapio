import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      viteMockServe({
         mockPath: 'mock',
         enable: true,
      }),
      AutoImport({
         imports: [
            'vue'
         ],
         dts: "./src/auto-imports.d.ts"
      })
   ],
})
