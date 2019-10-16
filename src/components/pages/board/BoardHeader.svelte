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
    margin-top: 25px;
  }

  .board__title {
    align-items: center;
    display: flex;
    margin-right: 15px;
    overflow: hidden;
  }

  .board__color {
    height: 20px;
    min-width: 5px;
  }

  .board__text {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* board btn edit */

  .btn--edit {
    align-items: center;
    color: var(--text-light);
    display: flex;
    padding: 0;
  }

  .btn__text {
    display: none;
  }

  .btn__icon {
    background-color: var(--list-bg);
    border-radius: 50%;
    padding: 10px;
  }

  @media (min-width: 768px) {
    .board__header {
      margin-top: 40px;
    }

    .board__color {
      height: 25px;
    }

    .board__text {
      font-size: 20px;
      margin-left: 20px;
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
  <div class="board__title">
    <span class={`board__color ${color}`}></span>
    <h2 class="board__text">{ name }</h2>
  </div>

  <button class="btn--edit" on:click={toggleEditBoard}>
    <span class="btn__text" >Editar</span>
    <i class="btn__icon icon-menu-edit"></i>
  </button>
</header>

{#if showEditBoard}
  <BoardEdit id={id} name={name} toggleEdit={toggleEditBoard} />
{/if}
