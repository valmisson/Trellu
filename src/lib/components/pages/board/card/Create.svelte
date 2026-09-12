<script>
  import { fade } from 'svelte/transition'

  import { cards } from '$lib/store'
  import { UID } from '$lib/utils'
  import { CardsDB } from '$lib/datastore'

  export let boardID
  export let listID
  export let toggleForm

  let name = ''

   // update Cards on Store
  function updateCardsStore (cardCreated) {
    $cards.push(cardCreated)

    cards.update(() => $cards)
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

<div class="form__card" in:fade>
  <!-- svelte-ignore a11y-autofocus -->
  <input type="text" placeholder="Digite o nome do cartão"
    bind:value={name} onkeydown={(e) => e.which === 13 && createCard()} autofocus>

  <div>
    <button class="btn btn--primary" onclick={createCard} disabled={!name}>CRIAR CARTÂO</button>
    <button class="btn--close icon-close" onclick={toggleForm} aria-label="Fechar formulário de criação do cartão" title="Fechar formulário de criação do cartão"></button>
  </div>
</div>

<!-- this component is usage on List header -->
