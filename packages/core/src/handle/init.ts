import { MapioElement, StateElement } from "@/element"

export type HandleCenter = ReturnType<typeof createHandleCenter>
export const createHandleCenter = () => {
   const handles: Record<string, any> = {}

   return {
      addHandle: (element: StateElement) => {
         const handle = new StateHandle(element)
         handle.target = element
         handles[element.key] = handle
         return handle
      },
      removeHandle: (element: StateElement) => {

      },
      getHandle: (hash: string) => {
         return handles[hash]
      }
   }
}

export enum StateHandleType {
   simple = 'simple',
   array = 'array',
   record = 'record',
   custom = 'custom',
   never = 'never'
}
export class StateHandle {
   target: MapioElement

   get key() {
      return this.target.key
   }

   /**
    * handle 的类型，
   */
   get type() {
      return this.target.type
   }

   /**
    * handle 的属性，从元素的标签内部获取
   */
   props: Record<string, any>
   /**
    * methods，调用handle时执行的内容
   */
   methods: Record<string, Function>

   parent: StateHandle
   children: StateHandle[] = []

   constructor(target: StateElement) {
      this.target = target
   }
}

export const getHandleTypeByElement = (el: any) => {
   if (el instanceof StateElement) {
   }
}