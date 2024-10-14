import { test } from 'vitest'
import { createClient } from '@/client'
import { createStore } from '@/store'
import { Store } from './data'


test('test 01', () => {
   const store = createStore(Store, {})
   const client = createClient({})
   client.connect(store)

   const handle = client.query('number')
   console.log(handle)

   handle.init({})
   const ret = handle.get({})
   console.log("ret", ret)
})

test('test 02', () => {
   class Parent {
      static tag = 'Parent'
   }
   class Child extends Parent { }

   console.log(Parent.prototype.isPrototypeOf(Child.prototype));  // true
   console.log(Parent.prototype.isPrototypeOf(Parent.prototype)); // false

   console.log(12133, Child.tag)
})