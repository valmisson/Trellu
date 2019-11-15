<script>
  import BoardEdit from './BoardEdit.svelte'

  export let id
  export let name
  export let color

  let showEditBoard = false

  const toggleEditBoard = () => showEditBoard = !showEditBoard
</script>

<style>
  .board__header {
    display: flex;
    justify-content: space-between;
  }

  .board__title {
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* board btn edit */

  .btn--edit {
    align-items: center;
    color: var(--white);
    display: flex;
    padding: 0;
  }

  .btn__text {
    display: none;
  }

  .btn__icon {
    background-color: var(--list-bg);
    border-radius: 50%;
    color: var(--text-dark);
    font-size: 14px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    .board__title {
      font-size: 20px;
    }

    /* board btn edit */

    .btn__text {
      display: block;
      font-size: 14px;
      margin-right: 10px;
    }
  }
</style>

<header class="board__header container">
  <h2 class="board__title">{ name }</h2>

  <button class="btn--edit" on:click={toggleEditBoard}>
    <span class="btn__text" >Editar</span>
    <i class="btn__icon icon-menu-edit"></i>
  </button>
</header>

{#if showEditBoard}
  <BoardEdit id={id} name={name} toggleEdit={toggleEditBoard} />
{/if}
