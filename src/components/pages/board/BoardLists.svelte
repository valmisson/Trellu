<script>
  import { fade } from 'svelte/transition'

  import { lists } from '@store'

  import CreateList from './list/Create.svelte'
  import List from './list/List.svelte'

  export let boardID
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  .board-lists {
    display: flex;
    margin-top: 30px;
    min-height: 72vh;
    max-height: 72vh;
    overflow-x: auto;
    overflow-y: hidden;
    user-select: none;
  }

  .list-wrapper {
    margin-right: 15px;
    min-width: 250px;
    max-width: 250px;
    margin-bottom: 20px;
  }

  /* create list */

  .create-list {
    position: relative;
  }

  @media (min-width: 768px) {
    .board-lists {
      margin-top: 40px;
    }

    .list-wrapper {
      min-width: 295px;
      max-width: 295px;
    }

  }

  @media (min-width: 1200px) {
    .board-lists {
      margin-top: 40px;
      min-height: 70vh;
      max-height: 70vh;
    }
  }

  @media (max-width: 1200px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
</style>

<section class="board-lists">
  {#each $lists as list (list.id)}
    <article class="list-wrapper" transition:fade>
      <List list={list} boardID={boardID}/>
    </article>
  {/each}

  <article class="list-wrapper create-list">
    <CreateList boardID={boardID}/>
  </article>
</section>
