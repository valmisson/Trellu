<script>
  import MenuBoards from './MenuBoards.svelte'
</script>

<style>
  .header {
    align-items: center;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
    display: flex;
    height: 50px;
    position: relative;
  }

  .header:not(.primary)::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }

  .header__link {
    display: table;
    text-decoration: none;
    margin-left: auto;
    margin-right: 15px;
    z-index: 1;
  }

  .header__brand {
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .header__link {
      margin: 0 auto;
      transform: translate(-100%, 0);
    }
  }

  @media (min-width: 1200px) {
    .header__brand {
      font-size: 20px;
    }
  }
</style>

<header class="header container">
  <MenuBoards />

  <a href="/" class="header__link">
    <h1 class="header__brand">Trellu</h1>
  </a>
</header>
