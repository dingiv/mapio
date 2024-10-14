
/**
 * 代表一个存储着状态的容器，这些方法由Client提供，由Mapio调用，是状态和数据在容器内部的交互接口
 */
export interface Box {
   /**
    * Mapio调用该方法，完成数据的初始化
    */
   init(ctx: any): void,
   /**
    * Mapio调用该方法，获取当前节点的值
    */
   get(ctx: any): void,
   /**
    * Mapio调用该方法，设置当前节点的值
    */
   set(ctx: any): void,
   /**
    * Mapio调用该方法，删除当前节点的值
    */
   drop(ctx: any): void,
   /**
    * Mapio调用该方法，将当前节点的值推送到远程
    */
   push(ctx: any): void,
   /**
    * Mapio调用该方法，从远程拉取当前节点的值
    */
   pull(ctx: any): void
}

/**
 * 一些数据不是由Mapio创建的，这些数据在Mapio中只能作为只读数据使用，不能进行修改，
 * Pin对象由外界的数据源使用，作为句柄使用
 * 同时，Pin对象
 */
export interface Pin {
   get(): any,
   set(): any,
   push(): void,
   pull(): void
}

export type BoxConstructor = new (ctx: any) => Box

export class VanillaBox implements Box {
   value: any
   initial: boolean
   defaultValue: any

   constructor(ctx: any) {
      this.defaultValue = ctx.defaultValue || 0
   }
   init() {
      console.log('初始')
      if (!this.initial) {
         this.initial = true
         this.value = this.defaultValue
      }
   }
   get() {
      if (!this.initial) {
         this.initial = true
         this.value = this.defaultValue || 0
      }
      console.log('获取')
      return this.value
   }
   set(val: any) {
      console.log('修改')
      this.value = val
      return true
   }
   drop() {
      console.log('销毁')
      if (this.initial) return
      this.value = 0
      this.initial = true
      return true
   }
   push() {
      console.log('push')
   }
   pull() {
      console.log('pull')
   }
}

