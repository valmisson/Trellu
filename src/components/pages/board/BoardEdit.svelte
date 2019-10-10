<script>
  import { fly } from 'svelte/transition'
  import { router } from '@spaceavocado/svelte-router'

  import { lists } from '@store'
  import { generateLink } from '@utils'
  import CardsDB from '@datastore/Cards.js'
  import ListsDB from '@datastore/Lists.js'
  import BoardsDB from '@datastore/Boards.js'

  export let id
  export let name
  export let toggleEdit

  async function updateBoard () {
    if (!name) return

    await BoardsDB.update(id, name)

    toggleEdit()

    // update url
    $router.push(generateLink(name, id))
    location.reload()
  }

  // delete lists and cards of board
  async function deleteCardsAndLists () {
    $lists.forEach(async ({ id }) => {
      await CardsDB.cleanChild(id)

      await ListsDB.remove(id)
    })
  }

  async function deleteBoard () {
    await BoardsDB.remove(id)

    deleteCardsAndLists()

    $router.push('/')
    location.reload()
  }
</script>

<style>
  /* board edit */

  .board-edit {
    background-color: var(--white);
    box-shadow: -3px 0 5px rgba(0, 0, 0, 0.05);
    height: calc(100vh - 50px);
    padding: 20px;
    position: fixed;
    right: 0;
    top: 50px;
    width: 290px;
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
    display: table;
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
    margin-top: 100px;
    width: 100%;
  }

  .board-btn-delete {
    color: var(--text-red);
    font-size: 14px;
    font-weight: 500;
    float: right;
    margin-right: -5px;
    padding: 5px;
  }

  @media (min-width: 768px) {
    /* board edit */

    .board-edit {
      width: 340px;
    }
  }

  @media (min-width: 1200px) {
    /* board edit */

    .board-edit {
      height: calc(100vh - 60px);
      top: 60px;
    }

    /* board edit delete */

    .board-edit-delete {
      position: absolute;
      bottom: 50px;
    }

    .board-btn-delete {
      margin-right: 40px;
    }
  }
</style>

<aside class="board-edit" transition:fly={{ x: 150 }}>
  <header class="board-edit-header">
    <span>Editar Quadro</span>

    <button class="icon-close" on:click={toggleEdit}></button>
  </header>

  <div class="board-edit-form">
    <label>Nome</label>

    <textarea type="text" class="board-edit-input" placeholder="Digite o nome do quadro" rows="3"
      bind:value={name}></textarea>

    <button class="board-btn-update btn btn-primary" on:click={updateBoard} disabled={!name}>ATUALIZAR</button>
  </div>

  <div class="board-edit-delete">
    <button class="board-btn-delete" on:click={deleteBoard}>EXCLUIR QUADRO</button>
  </div>
</aside>
