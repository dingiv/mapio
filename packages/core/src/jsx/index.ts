

// 去组件化，生成纯抽象元素树
function h(tag: string | Function, props: Record<string, any>, ...children: any[]) {
   // 根据 tag 判断类型
   if (typeof tag === 'function') {
      return tag({ ...props, children })
   } else {
      return {
         tag,
         props,
         children
      }
   }
}