import { MapioElementType, StateElement } from "@/element/builtin"
import { HandleCenter, StateHandle, StateHandleType } from "./init"

/**
 * 将抽象树转换为 handle 树
 */
export const parseAbstractTree = (node: any, tools: any, parent: any = {}): any => {
   const root = parseAbstractNode(node, tools.handleCenter, tools.elementCenter)
   configureTree(root, tools.handleCenter, parent)
   return root
}

const parseAbstractNode = (node: any, handleCenter: HandleCenter, elementCenter: any, parent: any = null): any => {

   if (elementCenter.getType(node.tag) === MapioElementType.state) {
      const target = elementCenter.create(node.tag)
      const stateHandle = handleCenter.addHandle(target)
      stateHandle.parent = parent

      // 采用后序遍历
      const childrenNode = node.children
      const childrenHandle: StateHandle[] = []
      const childrenProps: Record<string, any> = {}
      for (let i = 0; i < childrenNode.length; ++i) {
         const tmp = childrenNode[i]
         const maybeHandle = parseAbstractNode(tmp, handleCenter, elementCenter, parent)
         // TODO: 针对不同的子节点类型进行子节点处理
         const type = maybeHandle.type
         if (type != StateHandleType.never) {
            // TODO: 添加子节点
            childrenHandle.push(maybeHandle)
         } else {
            Object.assign(childrenProps, maybeHandle)
         }
      }
      stateHandle.children = childrenHandle
      return stateHandle
   } else {
      return { ...node.props }
   }
}

const configureTree = (node: any, tools: any, parent: any = {}): any => {

}
