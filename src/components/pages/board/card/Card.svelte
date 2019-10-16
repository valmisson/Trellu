<script>
  import { fade } from 'svelte/transition'

  import { removeElement } from '@utils'
  import { CardsDB } from '@datastore'

  export let id
  export let name

  let listCardElem
  let showFormEditCard = false

  function toggleFormEditCard () {
    showFormEditCard = !showFormEditCard
  }

  async function updateCard () {
    await CardsDB.update(id, name)

    toggleFormEditCard()
  }

  async function deleteCard () {
    await CardsDB.remove(id)

    // remove element of DOM
    removeElement(listCardElem)
  }
</script>

<style>
  .card {
    background-color: var(--white);
    border-radius: 3px;
    cursor: grab;
    padding: 10px 10px 20px 10px;
    margin-bottom: 10px;
  }

  .card:last-child {
    margin-bottom: 0;
  }

  .card:hover .btn--edit {
    opacity: 1;
    visibility: visible;
    transition: all ease 500ms;
  }

  /* card info */

  .card__info {
    display: flex;
    justify-content: space-between;
  }

  .btn--edit {
    color: var(--text-light);
    font-size: 13px;
    margin-top: -4px;
    opacity: 0;
    visibility: hidden;
    transition: all ease 500ms;
  }

  .btn--edit:hover {
    color: var(--text-dark);
  }

  /* form edit card */

  .card__form .btn--close {
    float: right;
    font-size: 16px;
    margin-bottom: 15px;
  }

  .card__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .btn--delete {
    color: var(--text-red);
    font-size: 14px;
    font-weight: 500;
  }
</style>

<li class="card" {id} transition:fade={{ duration: 700 }} bind:this={listCardElem}>
  {#if !showFormEditCard}
    <div class="card__info">
      <span>{ name }</span>

      <button class="btn--edit icon-edit" on:click={toggleFormEditCard}></button>
    </div>
  {/if}

  {#if showFormEditCard}
    <div class="card__form">
      <button class="btn--close icon-close" on:click={toggleFormEditCard}></button>

      <!-- svelte-ignore a11y-autofocus -->
      <input type="text" placeholder="Digite o nome do cartão"
        bind:value={name} on:keydown="{e => e.which === 13 && updateCard()}" autofocus>

      <div class="card__buttons">
        <button class="btn--delete" on:click={deleteCard}>EXCLUIR</button>
        <button class="btn btn--primary" on:click={updateCard} disabled={!name}>ATUALIZAR</button>
      </div>
    </div>
  {/if}
</li>
