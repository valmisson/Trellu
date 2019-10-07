<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { lists, cards } from '@store'
  import Header from '@components/pages/board/Header.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'
  import BoardDB from '@datastore/Boards.js'
  import ListsDB from '@datastore/Lists.js'
  import cardsDB from '@datastore/Cards.js'

  export let boardID

  let board = {
    name: '',
    color: ''
  }

  onMount(async () => {
    board = await BoardDB.get(boardID)

    let allLists = await ListsDB.getAll(boardID)
    let allCards = await cardsDB.getAll(boardID)

    // set data on store
    lists.set(allLists)
    cards.set(allCards)
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

<main class="board" transition:fade>
  <Header id={board.id} name={board.name} color={board.color} />

  <BoardLists board={boardID} />
</main>
