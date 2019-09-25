// external css
import 'normalize.css'
import './styles/main.css'

import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Trellu'
  }
})

export default app
