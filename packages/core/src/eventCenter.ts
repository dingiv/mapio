
export function createEventCenter() {

   const center: Record<string, Function[]> = {}

   const on = (channel: string, callback: Function) => {
      if (!channel) return
      if (!center[channel]) center[channel] = []
      center[channel].push(callback)
   }

   const emit = (channel: string, ...args: any[]) => {
      if (!center[channel]) return
      for (const callback of center[channel]) {
         callback(args)
      }
   }

   const off = (channel: string, callback: Function) => {
      if (!center[channel]) return
      center[channel] = center[channel].filter(item => item !== callback)
   }

   return {
      on,
      emit,
      off
   }
}