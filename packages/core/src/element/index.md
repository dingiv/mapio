# tree parse

1. jsx 函数调用，这一步由 ts 或者其他的打包器执行，生成简单的语法树，包含抽象 element 节点，fragment 节点，func 节点等。
2. parseSyntaxTree，将抽象的 element 节点，解析成具体的 StateHandle 节点树。


```js
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
```

