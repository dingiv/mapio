export function createClient(store: any, params: any) {

   console.log(store)

   

   return {
      useQuery(queryString: string, variables?: any) {
         // 查找数据



         return {
            value: 'string'
         }

      }
   }
}
