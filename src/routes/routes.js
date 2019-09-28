import Home from '@views/Home.svelte'
import Board from '@views/Board.svelte'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board/:title',
    name: 'Home',
    component: Board
  }
]
