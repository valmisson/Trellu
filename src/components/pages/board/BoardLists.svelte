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
    min-height: calc(100vh - 140px);
    max-height: calc(100vh - 140px);
    overflow-x: auto;
    overflow-y: hidden;
    user-select: none;
  }

  .lists::-webkit-scrollbar {
    height: 10px;
  }

  .lists::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.6);
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
      min-height: calc(100vh - 150px);
      max-height: calc(100vh - 150px);
    }

    .lists__wrapper {
      min-width: 295px;
      max-width: 295px;
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
