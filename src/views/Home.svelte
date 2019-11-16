<script>
  import { onMount } from 'svelte'

  import { formCreate } from '@store'
  import { BoardsDB } from '@datastore'

  import AppHeader from '@components/layout/Header.svelte'
  import Board from '@components/pages/home/Board.svelte'
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'

  let boards = []

  onMount(async () => {
    boards = await BoardsDB.getAll()
  })
</script>

<style>
  .home__header {
    margin-top: 30px;
  }

  .home__title {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

	.boards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
  }

  @media (min-width: 520px) {
    .boards {
      grid-column-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .home__header {
      margin-top: 40px;
    }

    .boards {
      grid-column-gap: 25px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .home__title {
      font-size: 20px;
    }

    .boards {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>

<AppHeader color="primary" />

<main class="home container">
  <header class="home__header">
    <h2 class="home__title">Meus Quadros</h2>
  </header>

  <section class="boards">
    {#each boards as board}
      <Board board={board} />
    {/each}

    <ButtonCreate title="CRIAR QUADRO" classWidth="" on:click={formCreate.show} />
  </section>
</main>
