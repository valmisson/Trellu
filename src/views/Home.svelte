<script>
  import { onMount } from 'svelte'
  import { formCreate } from '@store'
  import Board from '@components/pages/home/Board.svelte'
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'
  import BoardDB from '@datastore/Boards.js'

  let boards = []

  onMount(async () => {
    boards = await BoardDB.getAll()
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

<section class="home container">
  {#each boards as board}
    <Board board={board} />
  {/each}

  <ButtonCreate title="CRIAR QUADRO" onClick={formCreate.show} />
</section>
