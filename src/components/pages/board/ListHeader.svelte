<script>
  import { fade } from 'svelte/transition'

  export let id
  export let title

  let showFormCreateCard = false
  let showListOptions = false
  let currentList

  let navElement

  // used to identify which list to display the form
  const getDataId = event => {
    return navElement.dataset.id
  }

  const toggleFormCreateCard = event => {
    currentList = getDataId(event)

    showFormCreateCard = !showFormCreateCard
  }

  const toggleListOptions = event => {
    currentList = getDataId(event)

    showListOptions = !showListOptions
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

  /* form-create-card */

  .form-create-card {
    margin-top: 15px;
    margin-bottom: 10px;
    padding-right: 5px;
  }

  .form-create-card > input {
    width: 100%;
  }

  .form-create-card > div {
    align-items:  center;
    display: flex;
    margin-top: 15px;
  }

  .form-create-card .btn-create {
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

<header class="list-header">
  <h3 class="list-header-title">{ title }</h3>

  <nav class="list-header-options" bind:this={navElement} data-id={id}>
    <button class="options-add icon-add" on:click={toggleFormCreateCard}></button>
    <button class="options-menu icon-options" on:click={toggleListOptions}></button>
  </nav>
</header>

<!-- show on click and only in current list -->

{#if showFormCreateCard && currentList === id}
  <div class="form-create-card" transition:fade>
    <input type="text" placeholder="Digite o nome do cartão">

    <div>
      <button class="btn-create btn btn-primary">CRIAR CARTÂO</button>
      <button class="btn-close icon-close" on:click={toggleFormCreateCard}></button>
    </div>
  </div>
{/if}

{#if showListOptions && currentList === id}
  <div class="list-options" transition:fade>
    <button class="btn-options-edit">Editar Nome</button>
    <hr>
    <button class="btn-options-delete">EXCLUIR LISTA</button>
  </div>
{/if}
