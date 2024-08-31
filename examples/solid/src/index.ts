/* @refresh reload */
import { render } from 'solid-js/web'
import MyJsx from './App1'

console.log(MyJsx())

import App from './App'

const root = document.getElementById('root')

render(App, root!)


