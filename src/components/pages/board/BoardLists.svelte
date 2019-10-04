<script>
  import { lists } from '@store'
  import CreateList from './list/Create.svelte'
  import List from './list/List.svelte'

  export let board
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  .board-lists {
    display: flex;
    margin-top: 30px;
    min-height: 74vh;
    max-height: 74vh;
    overflow-x: auto;
    overflow-y: hidden;
    user-select: none;
  }

  .list-wrapper {
    margin-right: 15px;
    min-width: 250px;
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
    }

  }

  @media (min-width: 1200px) {
    .board-lists {
      margin-top: 40px;
      min-height: 72vh;
      max-height: 72vh;
    }
  }
</style>

<section class="board-lists">
  {#each $lists as list}
    <article class="list-wrapper">
      <List list={list}/>
    </article>
  {/each}

  <article class="list-wrapper create-list">
    <CreateList board={board}/>
  </article>
</section>
