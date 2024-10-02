<script>
  import { onMount } from 'svelte'
  import Sortable from 'sortablejs'

  import { cards } from '@store'
  import { CardsDB } from '@datastore'

  import Header from './Header.svelte'
  import Card from '../card/Card.svelte'

  export let list
  export let boardID

  let listCardsElem

  const { id, name } = list

  // ascending order
  const orderCards = (a, b) => a.order - b.order

  $: cardsFiltered = $cards.filter(({ list }) => list === id).sort(orderCards)

  onMount(() => {
    // register drag-drop plugin
    new Sortable(listCardsElem, {
      group: 'shared',
      ghostClass: 'ghost-list',
      fallbackTolerance: 3,

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
    padding: 15px 5px 20px 10px;
    position: relative;
  }

  .list__cards {
    margin-top: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
  }

  .list__cards::-webkit-scrollbar {
    width: 8px;
  }

  .list__cards::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
  }

  :global(.ghost-list) {
    opacity: 0.3;
  }

  :global(.sortable-chosen) {
    cursor: grabbing !important;
  }

  @media (min-width: 1200px) {
    .list__cards::-webkit-scrollbar {
      width: 7px;
    }
  }
</style>

<div class="list">
  <Header name={name} listID={id} boardID={boardID} />

  <ul class="list__cards" {id} bind:this={listCardsElem}>
    {#each cardsFiltered as { id, name } (id)}
      <Card id={id} name={name} />
    {/each}
  </ul>
</div>
