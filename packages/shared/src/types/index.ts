

export type UF<A = any, B = any> = (arg: A) => B

export type MF<A extends any[] = any[], B = any> = (...args: A) => B

