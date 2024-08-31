import { defineConfig, UserConfig } from 'vite'

 

export   function myPlugin() {
   const virtualModuleId = 'virtual:my-module'
   const resolvedVirtualModuleId = '\0' + virtualModuleId
 
   return {
     name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
     resolveId(id) {
       if (id === virtualModuleId) {
         return resolvedVirtualModuleId
       }
     },
     load(id) {
       if (id === resolvedVirtualModuleId) {
         return `export const msg = "from virtual module"`
       }
     },
   }
 }
function innerModule() {
   return {
      name: 'inner-module',
      build: {
         rollupOptions: {
            external: ['react', 'react-dom']
         }
      }
   }
}

export default defineConfig(() => {


   return <UserConfig>{
      plugins: [
         myPlugin()
      ],
      resolve: {
         conditions: ['typescript']
      },
      build: {
         lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs']
         }
      }
   }
})