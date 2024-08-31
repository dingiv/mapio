
import { createStateHandle } from './element'
import { createEventCenter } from './eventCenter'


// 容器负责的事，字串查询、依赖注入、AOP
export const createStore = (node: () => any, config?: any) => {

   // State tree
   const root = node()

   // id Map
   const idMap = {}

   // Registered Client
   const client = []

   // Event center
   const eventCenter = createEventCenter()

   // Element Center
   const elementCenter = {}


   const invoke = (command: string) => { }

   const register = (clientInstance: string) => { }


   // core method find a target matching the query string
   const query = (queryString: string) => {

      const target = getELementById(queryString)

      return createStateHandle(root, target)
   }

   const getELementById = (id: string) => { return {} }

   const append = (parentId: string, childId: string) => { }

   const pin = () => { }


   return {
      root,
      invoke,
      register,

      query,
      append,
      pin
   }
}


const af = () => { }

const createModelTree = () => { }