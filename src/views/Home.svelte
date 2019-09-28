<script>
  import { formCreate } from '@store'

  import Board from '@components/home/Board.svelte'
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'
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
  <Board color="blue" title="Aprenda User Experience" link="#/" />

  <ButtonCreate onClick={formCreate.show} />
</section>
