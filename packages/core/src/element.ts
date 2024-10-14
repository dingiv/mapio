import { Box } from "./box"



class MapioElement {
   id = ""
   name = ''
   type = 'element'
   children = []
}

class StateElement implements MapioElement {
   id: string = ''
   name: string = ''
   type: string = ''
   children: never[] = []

   // 当前节点的值，这是原始数据，不能够使用vue或者其他框架的代理对象，
   // 要在其他框架获得数据之前，先拿到数据的原始值
   value: any
   // 当前节点的包装对象，
   // wrappers: any[]， 有多少个客户端就有多少份数据的wrapper，备份

   advice = []

   target: Box
}

class FuncElement implements MapioElement {
   id: string
   name: string
   type: string
   children: never[]

   exec() { }
}

class AdviceElement implements MapioElement {
   id: string
   name: string
   type: string
   children: never[]


}


const STATE_HANDLE_STORE = Symbol.for('store')
const STATE_HANDLE_ELEMENT = Symbol.for('element')

class StateHandle implements Box {

   declare [STATE_HANDLE_STORE]: any
   declare [STATE_HANDLE_ELEMENT]: any

   init(): void {
      console.log('init')
   }
   get(ctx: any) {
      console.log('get', ctx)
   }
   set(): void {
      console.log('set')
   }
   drop(): void {
      console.log('drop')
   }
   push(): void {
      console.log('push')
   }
   pull(): void {
      console.log('dfsf')
   }
}

export const createStateHandle = (store: any, element: any) => {
   const handle = new StateHandle
   handle[STATE_HANDLE_STORE] = store
   handle[STATE_HANDLE_ELEMENT] = element

   return handle
}

export enum StateType {
   never = 'never',
   any = 'any',

   boolean = 'boolean',
   number = 'number',
   string = 'string',
   bigint = 'bigint',

   option = 'option',
   array = 'array',
   object = 'object',
   binary = 'binary'
}

/**
 * 客户端
 */
export interface Client {
   /**
    * 查询方法
    */
   query(): void,

}

export type func = (...args: any[]) => any

export const createElement = (type: string | func, props: Record<string, string>, child: MapioElement[]) => {
   return {


   }
}


export const builtinElements = {
   StateElement,
   FuncElement,
   AdviceElement
}