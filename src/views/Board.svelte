<script>
  import { onMount } from 'svelte'

  import { lists, cards } from '@store'
  import { BoardsDB, ListsDB, CardsDB } from '@datastore'

  import Header from '@components/pages/board/BoardHeader.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'

  export let boardID

  let board = {
    id: '',
    name: '',
    background: ''
  }

  onMount(async () => {
    board = await BoardsDB.get(boardID)

    // set bg color on body
    document.body.classList.add(board.background)

    let allLists = await ListsDB.getAll(boardID)
    let allCards = await CardsDB.getAll(boardID)

    // set data on store
    lists.set(allLists)
    cards.set(allCards)
  })
</script>

<style>
  .board {
    height: calc(100vh - 50px);
    padding-top: 25px;
  }

  @media (min-width: 768px) {
    .board {
      padding-top: 30px;
    }
  }
</style>

<svelte:head>
  <title>{ board.name } - Trellu</title>
</svelte:head>

<main class="board">
  <Header {board} />

  <BoardLists {boardID} />
</main>
