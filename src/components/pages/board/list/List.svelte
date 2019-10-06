<script>
  import { onMount } from 'svelte'
  import { cards } from '@store'
  import Sortable from 'sortablejs'
  import Header from './Header.svelte'
  import Card from '../card/Card.svelte'
  import CardsDB from '@datastore/Cards.js'

  export let list
  export let board

  let listCardsElem

  const { id, name } = list

  // ascending order
  const orderCards = (a, b) => a.order - b.order

  $: cardsFiltered = $cards.filter(({ list }) => list === id).sort(orderCards)

  onMount(() => {
    // register drag-drop plugin
    const sortable = new Sortable(listCardsElem, {
      group: 'shared',
      ghostClass: 'ghost-list',

      onEnd: async event => {
        // move card to list

        const cardID = event.item.id
        const listID = event.to.id

        await CardsDB.move(cardID, listID)

        // reorder card position on list

        const allListChildNode = Object.values(event.to.children)

        allListChildNode.forEach(async (cardEl, index) => {
          const cardID = cardEl.id
          const newOrder = index

          await CardsDB.reorder(cardID, newOrder)
        })
      }
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
    padding: 15px 5px 0 10px;
    position: relative;
  }

  .list-cards {
    margin-top: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
    padding-bottom: 20px;
  }

  :global(.ghost-list) {
    opacity: 0.3;
  }

  :global(.sortable-chosen) {
    cursor: grabbing !important;
  }
</style>

<div class="list">
  <Header listID={id} boardID={board} name={name} />

  <ul class="list-cards" {id} bind:this={listCardsElem}>
    {#each cardsFiltered as { id, name } (id)}
      <Card id={id} name={name} />
    {/each}
  </ul>
</div>
