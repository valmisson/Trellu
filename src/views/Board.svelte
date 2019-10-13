<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import { lists, cards } from '@store'
  import { boardColorHEX } from '@utils'
  import { BoardsDB, ListsDB, CardsDB } from '@datastore'

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

<main class="board" transition:fade>
  <Header id={board.id} name={board.name} color={board.color} />

  <BoardLists boardID={boardID} />
</main>

<svelte:head>
  <title>{ board.name } - Trellu</title>

  <!-- pwa set dynamic theme color -->
  <meta name="theme-color" content={boardColorHEX(board.color)} >
</svelte:head>
