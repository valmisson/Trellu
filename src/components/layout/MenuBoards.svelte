<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import { formCreate } from '@store'
  import { generateLink } from '@utils'
  import { BoardsDB } from '@datastore'

  import ClickOutside from '@components/modules/ClickOutside.svelte'

  let showMenuBox = false
  let boards = []

  let menuElem

  const toggleMenuBox = () => showMenuBox = !showMenuBox

  function showForm () {
    toggleMenuBox()

    formCreate.show()
  }

  onMount(async () => {
    boards = await BoardsDB.getAll()
  })
</script>

<style>
  .btn--menu {
    display: flex;
    padding: 5px 0;
  }

  .menu__text {
    color: var(--white);
    margin-left: 10px;
  }

  .menu__icon {
    color: var(--grey-dark);
    transition: color ease 300ms;
  }

  .menu__icon.active {
    color: var(--white);
    transition: color ease 300ms;
  }

  .menu__box {
    background-color: var(--white);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    margin-left: -20px;
    padding: 15px 20px;
    position: absolute;
    top: 50px;
    z-index: 997;
  }

  .menu__link {
    align-items: center;
    display: flex;
    color: var(--text-light);
    margin-bottom: 15px;
  }

  .menu__link:hover {
    text-decoration: underline;
  }

  .menu__background {
    border-radius: 3px;
    display: block;
    height: 20px;
    margin-right: 15px;
    width: 20px;
  }

  /* btn create board */

  .btn--create {
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    padding: 5px 0;
  }
</style>

<nav class="menu" bind:this={menuElem}>
  <button class="btn--menu" on:click={toggleMenuBox} >
    <i class="menu__icon icon-board" class:active={showMenuBox}></i>
    <span class="menu__text">Quadros</span>
  </button>

  {#if showMenuBox}
    <!-- hide menu on click outside element -->
    <ClickOutside exclude={[menuElem]} on:outside={toggleMenuBox}/>

    <ul class="menu__box" transition:fade>
      {#each boards as board}
        <li class="menu__item">
          <a href={generateLink(board.name, board.id)} class="menu__link">
            <div class={`menu__background ${board.background}`}></div>
            <span>{ board.name }</span>
          </a>
        </li>
      {/each}

      <button class="btn--create" on:click={showForm}>CRIAR NOVO QUADRO</button>
    </ul>
  {/if}
</nav>
