import { useSingleton } from "@mapio/shared"

// 四种基本元素类型
export enum MapioElementType {
   vanilla = "vanilla",
   state = "state",
   effect = "effect",
   property = "property",
}

export class MapioElement {
   key: string = ""
   id = ""
   type = MapioElementType.vanilla
   tag = ""

   props: Record<string, any> = {}
   children: MapioElement[] = []
}

export class StateElement extends MapioElement {
   tag = "state"
   // 当前节点的值，这是原始数据，不能够使用vue或者其他框架的代理对象，
   // 要在其他框架获得数据之前，先拿到数据的原始值
   value: any

   constructor() {
      super()
      this.key = `${Date.now()}-${Math.random()}`
   }
}

export class EffectElement extends MapioElement {
   exec() { }
}

export class PropertyElement extends MapioElement { }

const SET_ELEMENT_INFO = Symbol("set element info")
export const [useElementCenter] = useSingleton(() => {
   // tagName -> class
   // { type: MapioElementType, class: MapioElement }
   const map: Record<string, any> = {}
   const defaultInfo = {
      type: MapioElementType.vanilla,
      class: MapioElement,
      tagName: "vanilla"
   }

   return {
      has(tagName: string) {
         return !!map[tagName]
      },
      getInfo(tagName: string) {
         return map[tagName] || defaultInfo
      },
      getType(tagName: string): MapioElementType {
         return map[tagName]?.type || defaultInfo.type
      },
      getClass(tagName: string) {
         return map[tagName]?.class || defaultInfo.class
      },
      [SET_ELEMENT_INFO](tagName: string, target: any /* constructor */) {
         let type = MapioElementType.vanilla
         // 判断类型
         if (target.prototype instanceof StateElement || target === StateElement) {
            type = MapioElementType.state
         } else if (target.prototype instanceof EffectElement || target === EffectElement) {
            type = MapioElementType.effect
         } else if (target.prototype instanceof PropertyElement || target === PropertyElement) {
            type = MapioElementType.property
         }
         map[tagName] = {
            type,
            class: target,
            tagName
         }
      },
      createElement(tagName: string) {
         const EL = map[tagName] || MapioElement
         return new EL()
      },
   }
})

export const builtin = (tagName: string) => {
   const set = useElementCenter()[SET_ELEMENT_INFO]
   return (target: any) => {
      set(tagName, target)
   }
} 
