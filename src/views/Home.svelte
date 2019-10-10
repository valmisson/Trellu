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
	.home {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
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

<section class="home container" transition:fade>
  {#each boards as board}
    <Board board={board} />
  {/each}

  <ButtonCreate title="CRIAR QUADRO" classWidth="" on:click={formCreate.show} />
</section>
