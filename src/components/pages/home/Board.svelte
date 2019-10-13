<script>
  import { generateLink } from '@utils'

  export let board

  const { id, name, color } = board
</script>

<style>
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

  .home-board {
    height: 70px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .home-board {
      height: 80px;
    }
  }
</style>

<article class={`home-board ${color}`}>
  <a href={generateLink(name, id)} class="btn">
    <h3 class="home-board-title">{ name }</h3>
  </a>
</article>
