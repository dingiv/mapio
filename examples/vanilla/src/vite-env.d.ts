/// <reference types="vite/client" />

declare module "virtual:my-module" {
   const content: string
   const msg: string
   export { msg }
   export default content
}