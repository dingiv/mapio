import { useSingleton } from "@mapio/shared";

export const [useElementTypeMap] = useSingleton(() => {
   const map: Record<string, any> = {}


   return {
      set(key: string, value: any) {
         map[key] = value
      },
      get(key: string) {
         return map[key]
      }
   }
})