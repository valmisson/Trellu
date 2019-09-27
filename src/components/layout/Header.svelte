<script>
  import MenuBoards from './MenuBoards.svelte'
</script>

<style>
  header {
    align-items: center;
    background-color: var(--white);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
    display: flex;
    height: 50px;
  }

  a {
    display: table;
    text-decoration: none;
    margin-left: auto;
    margin-right: 15px;
  }

  .brand {
    color: var(--primary);
    font-size: 18px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    a {
      margin: 0 auto;
      transform: translate(-100%, 0);
    }
  }

  @media (min-width: 1200px) {
    header {
      height: 60px;
    }

    .brand {
      font-size: 20px;
    }
  }
</style>

<header class="container">
  <MenuBoards />

  <a href="/">
    <h1 class="brand">Trellu</h1>
  </a>
</header>
