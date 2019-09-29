<script>
  export let color
  export let title
  export let link
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
    height: 80px;
    margin-bottom: 20px;
  }
</style>

<article class={`home-board ${color}`}>
  <a href={link} class="btn">
    <h3 class="home-board-title">{ title }</h3>
  </a>
</article>
