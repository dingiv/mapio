
import { createEventCenter } from './eventCenter'
import { createHandleCenter, parseAbstractTree } from './handle'
import { MapioElement, useElementCenter } from './element/builtin'
import { StateElement } from './element'

// 容器负责的事，字串查询、依赖注入、AOP
export type Store = ReturnType<typeof createStore>
export const createStore = (node: () => any, config?: any) => {
   // Element Center
   const handleCenter = createHandleCenter()
   const elementCenter = useElementCenter()
   // State tree
   const root = parseAbstractTree(node(), {
      handleCenter,
      elementCenter
   })
   // Registered Client

   // Event center
   const eventCenter = createEventCenter()

   const getELementById = (id: string) => {
      console.log('正在查询字串')
      const el = new MapioElement
      return el
   }

   // find a target element matching the query string
   const query = (queryString: string) => {
      const target = getELementById(queryString)

      if (target instanceof StateElement)
         return handleCenter.addHandle(target)

      return handleCenter.addHandle(new StateElement)
   }

   // append a child element to a parent element
   const append = (parentId: string, childId: string) => { }


   return {
      root,
      eventCenter,
      query,
      append
   }
}
