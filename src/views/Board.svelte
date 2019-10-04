<script>
  import { onMount } from 'svelte'
  import Header from '@components/pages/board/Header.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'
  import BoardDB from '@datastore/Boards.js'

  export let boardID

  let board = {
    name: '',
    color: ''
  }

  let lists = []

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

  <BoardLists lists={lists} />
</main>
