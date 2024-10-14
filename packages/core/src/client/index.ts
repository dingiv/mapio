
import { Store } from "../store";
import { BoxConstructor, VanillaBox } from './box'

/**
 * 客户端
 */
export interface Client {
   connect(store: Store): void;
   /**
    * 查询方法
    */
   query(queryString: string): any,
}

export type ClientConfig = {
   store: Store
   boxConstructor: BoxConstructor

   /**
    * 是否开启调试模式
    */
   debug: boolean
}

export function createClient(config: Partial<ClientConfig>): Client {
   let store: Store = config.store!
   const boxConstructor = config.boxConstructor || VanillaBox

   const empty = () => {
      console.log('empty')
   }

   return {
      connect(storeInstance) {
         console.log('connect')
         store = storeInstance
      },
      query(queryString) {
         console.log('query' + queryString)
         const handle = store!.query(queryString)
         const proxy = new Proxy(handle || {}, {
            get(target, key) {
               console.log(`get ${String(key)}`)
               return Reflect.get(target, key) || empty
            }
         })
         return proxy
      }
   }
}
