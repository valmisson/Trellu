<style>
  header {
    align-items: center;
    background-color: var(--white);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
    display: grid;
    height: 50px;
  }

  a {
    text-decoration: none;
  }

  .brand {
    color: var(--primary);
    font-size: 18px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    a {
      text-align: center;
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
  <a href="/">
    <h1 class="brand">Trellu</h1>
  </a>
</header>
