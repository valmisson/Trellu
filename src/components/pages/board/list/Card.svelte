<script>
  import { fade } from 'svelte/transition'
  import CardsDB from '@datastore/Cards.js'

  export let id
  export let name

  let showFormEditCard = false

  const focusInput = el => el.focus()

  function toggleFormEditCard () {
    showFormEditCard = !showFormEditCard
  }

  async function updateCard () {
    await CardsDB.update(id, name)

    toggleFormEditCard()
  }
</script>

<style>
  .list-card {
    background-color: var(--white);
    border-radius: 3px;
    cursor: grab;
    padding: 10px 10px 20px 10px;
    margin-bottom: 10px;
  }

  .list-card:last-child {
    margin-bottom: 0;
  }

  .list-card:hover .btn-edit-card {
    opacity: 1;
    visibility: visible;
    transition: all ease 500ms;
  }

  /* card info */

  .card-info {
    display: flex;
    justify-content: space-between;
  }

  .btn-edit-card {
    color: var(--text-light);
    font-size: 13px;
    margin-top: -4px;
    opacity: 0;
    visibility: hidden;
    transition: all ease 500ms;
  }

  .btn-edit-card:hover {
    color: var(--text-dark);
  }

  /* form edit card */
  .form-edit-card .btn-close {
    float: right;
    font-size: 16px;
    margin-bottom: 15px;
  }

  .form-edit-card > div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .btn-delete-card {
    color: var(--text-red);
    font-size: 14px;
    font-weight: 500;
  }
</style>

<li class="list-card" transition:fade={{ duration: 700 }}>
  {#if !showFormEditCard}
    <div class="card-info">
      <span>{ name }</span>
      <button class="btn-edit-card icon-edit" on:click={toggleFormEditCard}></button>
    </div>
  {/if}

  {#if showFormEditCard}
    <div class="form-edit-card">
      <button class="btn-close icon-close" on:click={toggleFormEditCard}></button>

      <textarea placeholder="Digite o nome do cartão" rows="2" bind:value={name} use:focusInput></textarea>

      <div>
        <button class="btn-delete-card">EXCLUIR</button>
        <button class="btn btn-primary" on:click={updateCard} disabled={!name}>ATUALIZAR</button>
      </div>
    </div>
  {/if}
</li>
