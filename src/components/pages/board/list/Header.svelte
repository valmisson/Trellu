<script>
  import { fade } from 'svelte/transition'

  import { removeElement } from '@utils'
  import { ListsDB, CardsDB } from '@datastore'

  import CreateCard from '../card/Create.svelte'
  import ClickOutside from '@components/modules/ClickOutside.svelte'

  export let name
  export let boardID
  export let listID

  let showFormCreateCard = false
  let showFormUpdateList = false
  let showListOptions = false

  let headerElem
  let navElement
  let listOptionsElem
  let formCreateCardElem
  let formUpdateListElem

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

  function closeAll () {
    showListOptions = false
    showFormCreateCard = false
    showFormUpdateList = false
  }

  async function updateList () {
    if (!name) return

    await ListsDB.update(listID, name)

    toggleFormUpdateList()
  }

  async function deleteList () {
    await ListsDB.remove(listID)

    // clean child cards
    await CardsDB.cleanChild(listID)

    // remove element list-wrapper of DOM
    const listWrapper = headerElem.parentNode.parentNode

    removeElement(listWrapper)
  }
</script>

<style>
  .list__header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  .list__title {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 500;
    margin: 0 12px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list__menu {
    display: flex;
  }

  .list__add,
  .list__options {
    color: var(--text-light);
  }

  .list__add {
    font-size: 15px;
    margin-right: 5px;
  }

  /* list options */

  .options {
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
  .options::after {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid var(--white);
    content: '';
    position: absolute;
    top: -9px;
    right: 5px;
  }

  /* triangle shadown */
  .options::before {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.20);
    content: '';
    position: absolute;
    top: -10px;
    right: 4px;
  }

  .options__edit,
  .options__delete {
    padding: 5px;
  }

  .options__edit {
    color: var(--text-light);
    margin-bottom: 5px;
  }

  .options__delete {
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

<header class="list__header" bind:this={headerElem}>
  <h3 class="list__title">{ name }</h3>

  <nav class="list__menu" bind:this={navElement} >
    <button class="list__add icon-add" on:click={toggleFormCreateCard}></button>
    <button class="list__options icon-options" on:click={toggleListOptions}></button>
  </nav>
</header>

<!-- hide on click outside element -->

{#if showFormCreateCard || showFormUpdateList || showListOptions}
  <ClickOutside exclude={[navElement, formCreateCardElem, formUpdateListElem, listOptionsElem]}
    on:outside={closeAll} />
{/if}

<!-- Form create card -->

{#if showFormCreateCard}
  <div bind:this={formCreateCardElem}>
    <CreateCard boardID={boardID} listID={listID} toggleForm={toggleFormCreateCard} />
  </div>
{/if}

<!-- Form update List -->

{#if showFormUpdateList}
  <div class="form__card" bind:this={formUpdateListElem} transition:fade>
    <!-- svelte-ignore a11y-autofocus -->
    <input type="text" placeholder="Digite o nome do cartão"
      bind:value={name} on:keydown="{e => e.which === 13 && updateList()}" autofocus>

    <div>
      <button class="btn btn--primary" on:click={updateList} disabled={!name}>ATUALIZAR</button>
      <button class="btn--close icon-close" on:click={toggleFormUpdateList}></button>
    </div>
  </div>
{/if}

<!-- List Options -->

{#if showListOptions}
  <div class="options" bind:this={listOptionsElem} transition:fade>
    <button class="options__edit" on:click={toggleFormUpdateList}>Editar Nome</button>
    <hr>
    <button class="options__delete" on:click={deleteList}>EXCLUIR LISTA</button>
  </div>
{/if}
