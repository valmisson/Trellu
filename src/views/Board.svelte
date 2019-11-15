<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import { lists, cards } from '@store'
  import { BoardsDB, ListsDB, CardsDB } from '@datastore'

  import AppHeader from '@components/layout/Header.svelte'
  import Header from '@components/pages/board/BoardHeader.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'

  export let boardID

  let board = {
    name: '',
    color: ''
  }

  onMount(async () => {
    board = await BoardsDB.get(boardID)

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

<AppHeader color={board.color}/>

<main class={`board ${board.color}`}>
  <Header id={board.id} name={board.name} color={board.color} />

  <BoardLists boardID={boardID} />
</main>
