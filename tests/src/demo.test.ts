import { test } from 'vitest'
import { createStore } from 'core'
import { rootEg } from './data'





test('test 01', () => {
   const store = createStore(() => rootEg, {})


   const handle = store.query('')

   handle.get('a')

   console.log(handle)
})
