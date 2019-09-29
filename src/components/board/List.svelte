<script>
  import ListHeader from './ListHeader.svelte'
  import ListCard from './ListCard.svelte'

  export let list
</script>

<style>
  .list {
    background-color: var(--list-bg);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: hidden;
    padding: 15px 5px 15px 10px;
  }

  .list-cards {
    margin-top: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
  }
</style>

<div class="list">
  <ListHeader id={list.id} title={list.title} />

  <ul class="list-cards">
    {#each list.lists as t}
      <ListCard title={t} />
    {/each}
  </ul>
</div>
