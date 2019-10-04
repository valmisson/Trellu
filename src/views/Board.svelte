<script>
  import { onMount } from 'svelte'
  import Header from '@components/pages/board/Header.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'
  import BoardDB from '@datastore/Boards.js'

  export let boardID

  const mochaList = [
    {
      id: 'ascve',
      title: 'To Do',
      lists: [
        'Design Thinking',
        'Design Sprint',
        'Motion',
        'UI',
        'Design Sprint',
        'Motion',
        'UI'
      ]
    },
    {
      id: 'avehs',
      title: 'In Progress',
      lists: [
        'Design System'
      ]
    },
    {
      id: 'eggha',
      title: 'Done',
      lists: [
        'Empatia',
        'Research'
      ]
    }
  ]

  let board = {
    name: '',
    color: ''
  }

  onMount(async () => {
    board = await BoardDB.get(boardID)
  })
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  .board {
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    .board {
      padding-left: 35px;
    }
  }

  @media (min-width: 1200px) {
    .board {
      padding-left: 65px;
    }
  }
</style>

<main class="board">
  <Header name={board.name} color={board.color} />

  <BoardLists lists={mochaList} />
</main>
