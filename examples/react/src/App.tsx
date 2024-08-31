import { useState } from "react"


const App = function () {

   const [state, setState] = useState<any>(0)

   return (
      <div onClick={() => setState(state + 1)} >
         hjhhh{state}
      </div>
   )
}


export default <App />

