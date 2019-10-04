<script>
  import { fade } from 'svelte/transition'
  import UID from '@utils/uid.js'
  import ListsDB from '@datastore/Lists.js'
  import CardsDB from '@datastore/Cards.js'

  export let listID
  export let name

  let showFormCreateCard = false
  let showFormUpdateList = false
  let showListOptions = false

  let headerElem
  let navElement

  const focusInput = el => el.focus()

  function toggleFormCreateCard () {
    showFormCreateCard = !showFormCreateCard

    showListOptions = false
    showFormUpdateList = false
  }

  function toggleFormUpdateList () {
    showFormUpdateList = !showFormUpdateList

    showListOptions = false
    showFormCreateCard = false
  }

  function toggleListOptions () {
    showListOptions = !showListOptions

    showFormCreateCard = false
  }

  async function updateList () {
    await ListsDB.update(listID, name)

    toggleFormUpdateList()
  }

  async function deleteList () {
    await ListsDB.remove(listID)

    // remove element of DOM
    const listWrapper = headerElem.parentNode.parentNode
    listWrapper.remove()
  }

  let cardName = ''

  // create card
  async function createCard () {
    if (!cardName) return

    const id = UID()
    const name = cardName
    const order = await CardsDB.count(listID)
    const list = listID

    const cardCreated = await CardsDB.create({ id, name, order, list })

    cardName = ''
    toggleFormCreateCard()
  }
</script>

<style>
  .list-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  .list-header-title {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 500;
    margin: 0 12px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-header-options {
    display: flex;
  }

  .options-add,
  .options-menu {
    color: var(--text-light);
  }

  .options-add {
    font-size: 15px;
    margin-right: 5px;
  }

  /* form card */

  .form-card {
    margin-top: 15px;
    margin-bottom: 10px;
    padding-right: 5px;
  }

  .form-card > input {
    width: 100%;
  }

  .form-card > div {
    align-items:  center;
    display: flex;
    margin-top: 15px;
  }

  .form-card .btn-create {
    padding: 13px 20px;
  }

  .list-options {
    align-self: flex-end;
    background-color: var(--white);
    border-radius: 3px;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
    padding: 15px 15px 10px 15px;
    position: absolute;
    right: 10px;
    top: 45px;
    width: 150px;
    z-index: 997;
  }

  /* triangle */
  .list-options::after {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid var(--white);
    content: '';
    position: absolute;
    top: -9px;
    right: 5px;
  }

  /* triangle shadown */
  .list-options::before {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.20);
    content: '';
    position: absolute;
    top: -10px;
    right: 4px;
  }

  .list-options > button {
    padding: 5px;
  }

  .btn-options-edit {
    color: var(--text-light);
    margin-bottom: 5px;
  }

  .btn-options-delete {
    color: var(--text-red);
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }

  hr {
    border-color: var(--grey);
    opacity: 0.4;
  }
</style>

<header class="list-header" bind:this={headerElem}>
  <h3 class="list-header-title">{ name }</h3>

  <nav class="list-header-options" bind:this={navElement} >
    <button class="options-add icon-add" on:click={toggleFormCreateCard}></button>
    <button class="options-menu icon-options" on:click={toggleListOptions}></button>
  </nav>
</header>

<!-- Form create card -->

{#if showFormCreateCard}
  <div class="form-card" transition:fade>
    <input type="text" placeholder="Digite o nome do cartão" bind:value={cardName}>

    <div>
      <button class="btn-create btn btn-primary" on:click={createCard} disabled={!cardName}>CRIAR CARTÂO</button>
      <button class="btn-close icon-close" on:click={toggleFormCreateCard}></button>
    </div>
  </div>
{/if}

<!-- Form update List -->

{#if showFormUpdateList}
  <div class="form-card" transition:fade>
    <input type="text" placeholder="Digite o nome do cartão"
      bind:value={name} use:focusInput>

    <div>
      <button class="btn-create btn btn-primary" on:click={updateList} disabled={!name}>ATUALIZAR</button>
      <button class="btn-close icon-close" on:click={toggleFormUpdateList}></button>
    </div>
  </div>
{/if}

<!-- List Options -->

{#if showListOptions}
  <div class="list-options" transition:fade>
    <button class="btn-options-edit" on:click={toggleFormUpdateList}>Editar Nome</button>
    <hr>
    <button class="btn-options-delete" on:click={deleteList}>EXCLUIR LISTA</button>
  </div>
{/if}
