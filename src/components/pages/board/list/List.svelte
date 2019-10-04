<script>
  import { onMount } from 'svelte'
  import Sortable from 'sortablejs'

  import Header from './Header.svelte'
  import Card from './Card.svelte'

  export let list

  let listCardsElem

  onMount(() => {
    // register drag-drop plugin
    const sortable = new Sortable(listCardsElem, {
      group: 'shared',
      ghostClass: 'ghost-list'
    })
  })
</script>

<style>
  .list {
    background-color: var(--list-bg);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    padding: 15px 5px 15px 10px;
    position: relative;
  }

  .list-cards {
    margin-top: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
  }

  :global(.ghost-list) {
    opacity: 0;
  }

  :global(.sortable-chosen) {
    cursor: grabbing !important;
  }
</style>

<div class="list">
  <Header title={list.name} />

  <ul class="list-cards" bind:this={listCardsElem}>
    <!-- {#each list.lists as titles}
      <Card title={titles} />
    {/each} -->
  </ul>
</div>
