<script>
  import { fade } from 'svelte/transition'

  import { cards } from '@store'
  import { UID } from '@utils'
  import { CardsDB } from '@datastore'

  export let boardID
  export let listID
  export let toggleForm

  let name = ''

  const focusInput = el => el.focus()

   // update Cards on Store
  function updateCardsStore (cardCreated) {
    $cards.push(cardCreated)

    const oldCards = $cards

    cards.update(() => oldCards)
  }

  // create card
  async function createCard () {
    if (!name) return

    const id = UID()
    const list = listID
    const board = boardID
    const order = await CardsDB.count(list)

    const cardCreated = await CardsDB.create({ id, name, order, list, board })

    updateCardsStore(cardCreated)

    name = ''
  }
</script>

<div class="form-card" in:fade>
  <input type="text" placeholder="Digite o nome do cartão"
    bind:value={name} use:focusInput on:keydown="{e => e.which === 13 && createCard()}">

  <div>
    <button class="btn-create btn btn-primary" on:click={createCard} disabled={!name}>CRIAR CARTÂO</button>
    <button class="btn-close icon-close" on:click={toggleForm}></button>
  </div>
</div>

<!-- this component is usage on List header -->
