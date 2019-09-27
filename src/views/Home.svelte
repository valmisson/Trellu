<script>
  import { formCreate } from '../store'
</script>

<style>
	.home {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }

  .home-board {
    display: grid;
    border-radius: 3px;
  }

  .home-board a {
    padding: 15px;
  }

  .home-board-title {
    color: var(--white);
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  .home-board,
  .btn-create {
    height: 80px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .home {
      grid-column-gap: 30px;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 50px;
    }
  }

  @media (min-width: 1200px) {
    .home {
      grid-template-columns: repeat(4, 1fr);
      margin-top: 40px;
    }
  }
</style>

<main class="home container">
  <article class="home-board blue">
    <a href="/#" class="btn">
      <h3 class="home-board-title">Aprenda User Experience</h3>
    </a>
  </article>

  <button class="btn btn-create" on:click={formCreate.show}>CRIAR QUADRO</button>
</main>
