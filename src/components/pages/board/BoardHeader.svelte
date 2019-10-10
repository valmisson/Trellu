<script>
  import BoardEdit from './BoardEdit.svelte'

  export let id
  export let name
  export let color

  let showEditBoard = false

  const toggleEditBoard = () => showEditBoard = !showEditBoard
</script>

<style>
  .board-header {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-right: 15px;
  }

  .board-title {
    align-items: center;
    display: flex;
    margin-right: 15px;
    overflow: hidden;
  }

  .board-title-color {
    height: 20px;
    min-width: 5px;
  }

  .board-title > h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* board btn edit */

  .board-btn-edit {
    align-items: center;
    color: var(--text-light);
    display: flex;
  }

  .board-btn-edit > span {
    display: none;
  }

  .board-btn-edit > i {
    background-color: var(--list-bg);
    border-radius: 50%;
    padding: 10px;
  }

  @media (min-width: 768px) {
    .board-header {
      margin-top: 40px;
    }

    .board-title-color {
      height: 25px;
    }

    .board-title > h2 {
      font-size: 20px;
      margin-left: 20px;
    }

    /* board btn edit */

    .board-btn-edit {
      padding-right: 10px;
    }

    .board-btn-edit > span {
      display: block;
      font-size: 14px;
      margin-right: 10px;
    }
  }

  @media (min-width: 1200px) {
    .board-btn-edit {
      margin-right: 30px;
      padding-right: 0;
    }
  }
</style>

<header class="board-header">
  <div class="board-title">
    <span class={`board-title-color ${color}`}></span>
    <h2>{ name }</h2>
  </div>

  <button class="board-btn-edit" on:click={toggleEditBoard}>
    <span>Editar</span>
    <i class="icon-menu-edit"></i>
  </button>
</header>

{#if showEditBoard}
  <BoardEdit id={id} name={name} toggleEdit={toggleEditBoard} />
{/if}
