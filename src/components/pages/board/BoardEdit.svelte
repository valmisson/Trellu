<script>
  import { fly } from 'svelte/transition'
  import { router } from '@spaceavocado/svelte-router'

  import { lists, boardBackground } from '@store'
  import { generateLink } from '@utils'
  import { BoardsDB, CardsDB, ListsDB } from '@datastore'

  export let id
  export let name
  export let background
  export let toggleEdit

  let selected = $boardBackground.indexOf(background)

  const select = value => e => {
    selected = e.target.id

    background = value
  }

  async function updateBoard () {
    if (!name) return

    await BoardsDB.update(id, name, background)

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

  .board__edit {
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

  /* board edit header */

  .edit__header {
    align-items: center;
    display: flex;
    color: var(--text-dark);
    justify-content: space-between;
  }

  .edit__text {
    font-weight: 500;
  }

  .edit__header > button {
    color: var(--text-light);
    padding: 5px;
  }

  /* board edit form */

  .edit__form {
    display: table;
    margin-top: 20px;
  }

  .edit__input {
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .edit__background {
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: repeat(5, 40px);
    justify-content: center;
    margin-top: 10px;
  }

  .btn--background {
    border-radius: 3px;
    height: 40px;
    margin-bottom: 20px;
  }

  .selected::before {
    content: "\e906"; /* .icon-selected */
    color: var(--white);
    font-family: 'icons';
  }

  .btn--update {
    float: right;
    margin-top: 15px;
  }

  /* board edit delete */

  .edit__delete {
    margin-top: 35px;
    width: 100%;
  }

  .btn--delete {
    color: var(--text-red);
    font-size: 14px;
    font-weight: 500;
    float: right;
    margin-right: -5px;
    padding: 5px;
  }

  @media (min-width: 768px) {
    /* board edit */

    .board__edit {
      width: 340px;
    }

    /* board edit form */

    .edit__input {
      margin-bottom: 20px;
    }

    .edit__background {
      grid-column-gap: 20px;
      grid-template-columns: repeat(5, 45px);
    }

    .btn--background {
      height: 45px;
    }
  }

  @media (min-height: 568px) {
    /* board edit form */

    .edit__form {
      margin-top: 40px;
    }

    /* board edit delete */

    .edit__delete {
      position: absolute;
      bottom: 40px;
    }

    .btn--delete {
      margin-right: 40px;
    }

    .btn--update {
      margin-top: 30px;
    }
  }
</style>

<aside class="board__edit edit" transition:fly={{ x: 150 }}>
  <header class="edit__header">
    <span class="edit__text">Editar Quadro</span>

    <button class="icon-close" on:click={toggleEdit}></button>
  </header>

  <div class="edit__form">
    <label>Nome</label>

    <textarea type="text" class="edit__input" placeholder="Digite o nome do quadro" rows="2"
      bind:value={name}></textarea>


    <label>Background</label>

    <div class="edit__background">
      {#each $boardBackground as background, index}
        <button class={`btn--background ${background} ${selected == index ? 'selected' : ''}`}
          on:click={select(background)} id={index}></button>
      {/each}
    </div>

    <button class="btn--update btn btn--primary" on:click={updateBoard} disabled={!name}>ATUALIZAR</button>
  </div>

  <div class="edit__delete">
    <button class="btn--delete" on:click={deleteBoard}>EXCLUIR QUADRO</button>
  </div>
</aside>
