import { createSignal } from 'solid-js'


function App() {
   const [count, setCount] = createSignal(0)
   console.log('dsffd')
   return (
      <>
         <div>hello</div>
         <div>count: {count()}</div>
         <button onClick={() => setCount(count() + 1)}>increment</button>
      </>
   )
}

export default App
