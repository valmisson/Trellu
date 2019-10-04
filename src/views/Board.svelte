<script>
  import { onMount } from 'svelte'
  import { lists } from '@store'
  import Header from '@components/pages/board/Header.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'
  import BoardDB from '@datastore/Boards.js'
  import ListsDB from '@datastore/Lists.js'

  export let boardID

  let board = {
    name: '',
    color: ''
  }

  onMount(async () => {
    board = await BoardDB.get(boardID)

    let allLists = await ListsDB.getAll(boardID)

    // set list data on store
    lists.set(allLists)
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

  <BoardLists board={boardID} />
</main>
