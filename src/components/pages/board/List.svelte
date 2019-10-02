<script>
  import { onMount } from 'svelte'
  import Sortable from 'sortablejs'

  import ListHeader from './ListHeader.svelte'
  import ListCard from './ListCard.svelte'

  export let list

  let listElem

  onMount(() => {
    const sortable = new Sortable(listElem, {
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
  <ListHeader id={list.id} title={list.title} />

  <ul class="list-cards" bind:this={listElem}>
    {#each list.lists as t}
      <ListCard title={t} />
    {/each}
  </ul>
</div>
