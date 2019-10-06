<script>
  import { fly } from 'svelte/transition';

  export let name
  export let color

  let showEditBoard = false

  const inputFocus = el => el.focus()

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

  /* board edit */

  .board-edit {
    background-color: var(--white);
    box-shadow: -3px 0 5px rgba(0, 0, 0, 0.05);
    height: calc(100vh - 50px);
    padding: 20px;
    position: fixed;
    right: 0;
    top: 50px;
    width: 300px;
    z-index: 997;
  }

  /* .board edit header */

  .board-edit-header {
    align-items: center;
    display: flex;
    color: var(--text-dark);
    justify-content: space-between;
  }

  .board-edit-header > span {
    font-weight: 500;
  }

  .board-edit-header > button {
    color: var(--text-light);
    padding: 5px;
  }

  /* board edit form */

  .board-edit-form {
    margin-top: 40px;
  }

  .board-edit-input {
    margin-top: 10px;
  }

  .board-btn-update {
    float: right;
    margin-top: 20px;
  }

  /* board edit delete */

  .board-edit-delete {
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: right;
  }

  .board-btn-delete {
    color: var(--text-red);
    font-size: 14px;
    font-weight: 500;
    margin-right: 40px;
    padding: 5px;
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

    /* board edit */

    .board-edit {
      width: 340px;
    }
  }

  @media (min-width: 1200px) {
    .board-btn-edit {
      margin-right: 30px;
      padding-right: 0;
    }

    /* board edit */

    .board-edit {
      height: calc(100vh - 60px);
      top: 60px;
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
  <aside class="board-edit" transition:fly={{ x: 150 }}>
    <header class="board-edit-header">
      <span>Editar Quadro</span>

      <button class="icon-close" on:click={toggleEditBoard}></button>
    </header>

    <div class="board-edit-form">
      <label>Nome</label>
      <textarea type="text" class="board-edit-input" placeholder="Digite o nome do quadro" rows="3"
        bind:value={name} use:inputFocus></textarea>

      <button class="board-btn-update btn btn-primary">ATUALIZAR</button>
    </div>

    <div class="board-edit-delete">
      <button class="board-btn-delete">EXCLUIR QUADRO</button>
    </div>
  </aside>
{/if}
