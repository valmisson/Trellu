<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { formCreate } from '@store'
  import generateLink from '@utils/generateLink.js'
  import BoardDB from '@datastore/Boards.js'

  let showMenuBox = false
  let boards = []

  const toggleMenuBox = () => showMenuBox = !showMenuBox

  function showForm () {
    toggleMenuBox()

    formCreate.show()
  }

  onMount(async () => {
    boards = await BoardDB.getAll()
  })
</script>

<style>
  .menu-btn {
    display: flex;
    padding: 5px;
  }

  .menu-btn span {
    color: var(--text-light);
    margin-left: 10px;
  }

  .menu-btn i {
    color: var(--grey-dark);
    transition: color ease 300ms;
  }

  .menu-btn i.active {
    color: var(--primary);
    transition: color ease 300ms;
  }

  .menu-box {
    background-color: var(--white);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    margin-left: -10px;
    padding: 15px;
    position: absolute;
    top: 50px;
    z-index: 997;
  }

  .menu-box-item a {
    align-items: center;
    display: flex;
    color: var(--text-light);
    margin-bottom: 15px;
  }

  .menu-box-item .color {
    border-radius: 3px;
    display: block;
    height: 25px;
    margin-right: 15px;
    width: 25px;
  }

  .menu-box-item a:hover {
    text-decoration: underline;
  }

  .menu-btn-create {
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    padding: 5px 0;
  }

  @media (min-width: 1200px) {
    .menu-box {
      top: 60px;
    }
  }
</style>

<nav class="menu">
  <button class="menu-btn" on:click={toggleMenuBox}>
    <i class="icon-board" class:active={showMenuBox}></i>
    <span>Quadros</span>
  </button>

  {#if showMenuBox}
    <ul class="menu-box" transition:fade>
      {#each boards as board}
        <li class="menu-box-item">
          <a href={generateLink(board.name, board.id)}>
            <span class={`color ${board.color}`}></span>
            <span class="menu-board-name">{ board.name }</span>
          </a>
        </li>
      {/each}

      <button class="menu-btn-create" on:click={showForm}>CRIAR NOVO QUADRO</button>
    </ul>
  {/if}
</nav>
