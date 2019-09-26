<script>
  import { fade } from 'svelte/transition'

  let isVisible = false

  const toggleBox = () => isVisible = !isVisible
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
  <button class="menu-btn" on:click={toggleBox}>
    <i class="icon-board" class:active={isVisible}></i>
    <span>Quadros</span>
  </button>

  {#if isVisible}
  <ul class="menu-box" transition:fade>
    <li class="menu-box-item">
      <a href="/#">
        <span class="color blue"></span>
        <span class="menu-board-name">Aprenda User Experience</span>
      </a>
    </li>

    <button class="menu-btn-create">CRIAR NOVO QUADRO</button>
  </ul>
  {/if}
</nav>
