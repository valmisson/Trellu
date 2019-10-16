<script>
  import { fade } from 'svelte/transition'

  import { lists } from '@store'

  import CreateList from './list/Create.svelte'
  import List from './list/List.svelte'

  export let boardID
</script>

<style>
  .lists {
    display: flex;
    margin-top: 30px;
    min-height: 73vh;
    max-height: 73vh;
    overflow-x: auto;
    overflow-y: hidden;
    user-select: none;
  }

  .lists__wrapper {
    margin-right: 15px;
    min-width: 250px;
    max-width: 250px;
    margin-bottom: 20px;
  }

  .lists__wrapper:first-child {
    margin-left: 15px;
  }

  /* create list */

  .lists--create {
    position: relative;
  }

  @media (min-width: 768px) {
    .lists {
      margin-top: 40px;
    }

    .lists__wrapper {
      min-width: 295px;
      max-width: 295px;
    }
  }

  @media (min-width: 1200px) {
    .lists {
      margin-top: 40px;
      min-height: 71vh;
      max-height: 71vh;
    }
  }

  @media (max-width: 1200px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
</style>

<section class="lists">
  {#each $lists as list (list.id)}
    <article class="lists__wrapper" transition:fade>
      <List list={list} boardID={boardID}/>
    </article>
  {/each}

  <article class="lists__wrapper lists--create">
    <CreateList boardID={boardID}/>
  </article>
</section>
