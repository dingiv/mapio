
import { MF } from "@/types"

export const useSingleton = <A extends any[], B>(func: MF<A, B>) => {
   let called = false
   let returnValue: B | undefined
   return [
      (...args: A): B => {
         if (called) return returnValue!
         called = true
         returnValue = func(...args)
         return returnValue
      },
      () => {
         called = false
         returnValue = undefined
      }
   ] as const
}

