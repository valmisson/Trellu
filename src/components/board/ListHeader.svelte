<script>
  import { fade } from 'svelte/transition'

  export let id
  export let title

  let showFormCreateCard = false
  let currentList

  const toggleFormCreateCard = event => {
    // used to identify which list to display the form
    currentList = event.target.dataset.id

    showFormCreateCard = !showFormCreateCard
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

  .options-add {
    color: var(--text-light);
    font-size: 15px;
    margin-right: 5px;
  }

  .options-menu {
    color: var(--text-light);
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
</style>

<header class="list-header">
  <h3 class="list-header-title">{ title }</h3>

  <nav class="list-header-options">
    <button class="options-add icon-add" on:click={toggleFormCreateCard} data-id={id}></button>
    <button class="options-menu icon-options"></button>
  </nav>
</header>

<!-- show form only in current list -->
{#if showFormCreateCard && currentList === id}
  <div class="form-create-card" transition:fade>
    <input type="text" placeholder="Digite o nome do cartão">

    <div>
      <button class="btn-create btn btn-primary">CRIAR CARTÂO</button>
      <button class="btn-close icon-close" on:click={toggleFormCreateCard}></button>
    </div>
  </div>
{/if}
