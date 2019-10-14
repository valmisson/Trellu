import Home from '@views/Home.svelte'
import Board from '@views/Board.svelte'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/b/:id/:title',
    name: 'Board',
    component: Board,
    props: route => {
      return {
        boardID: route.params.id
      }
    }
  }
]
