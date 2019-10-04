import Home from '@views/Home.svelte'
import Board from '@views/Board.svelte'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board/:id/:title',
    name: 'Home',
    component: Board,
    props: route => {
      return {
        boardID: route.params.id
      }
    }
  }
]
