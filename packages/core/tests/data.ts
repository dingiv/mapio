


export const rootEg = {
   id: 0,
   /**
    * state、array、object
    * 
    */
   tag: "array",
   props: {},  // Record<string, any>
   children: [
      {
         id: 1,
         tag: "object",
         props: {},
         methods: {},
         children: [
            {
               id: 2,
               tag: "string",
               props: {
                  key: "name",
               },
            },
            {
               id: 3,
               tag: "state",
               props: {
                  type: "number",
                  key: "age"
               },
            }
         ]
      },
      {
         id: 4,
         tag: "array",
         props: {},
         methods: {},
         children: [
            {
               id: 5,
               tag: "number",
               props: {
                  template: "true"
               }
            }
         ]
      },
   ]
}

export const Store = () => rootEg