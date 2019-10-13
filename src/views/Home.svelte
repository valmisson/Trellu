<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import { formCreate } from '@store'
  import { BoardsDB } from '@datastore'

  import Board from '@components/pages/home/Board.svelte'
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'

  let boards = []

  onMount(async () => {
    boards = await BoardsDB.getAll()
  })
</script>

<style>
  .home-header {
    margin-top: 30px;
  }

  .home-title {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

	.home-boards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
  }

  @media (min-width: 520px) {
    .home-boards {
      grid-column-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .home-header {
      margin-top: 40px;
    }

    .home-boards {
      grid-column-gap: 25px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .home-title {
      font-size: 20px;
    }

    .home-boards {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>

<main class="home container" transition:fade>
  <header class="home-header">
    <h2 class="home-title">Meus Quadros</h2>
  </header>

  <section class="home-boards">
    {#each boards as board}
      <Board board={board} />
    {/each}

    <ButtonCreate title="CRIAR QUADRO" classWidth="" on:click={formCreate.show} />
  </section>
</main>
