import { addMessages, init } from 'svelte-i18n'

import br from './lang/br'
import en from './lang/en'

addMessages('br', br)
addMessages('en', en)

init({
  initialLocale: 'br'
})
