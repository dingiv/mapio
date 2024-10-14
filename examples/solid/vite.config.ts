import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
   plugins: [solid()],
   esbuild: {
      jsx: "transform",
      jsxImportSource:"./src"
   }
})
