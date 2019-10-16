<script>
  import { generateLink } from '@utils'

  export let board

  const { id, name, color } = board
</script>

<style>
  .boards__item {
    display: grid;
    border-radius: 3px;
  }

  .boards__link {
    padding: 15px;
  }

  .boards__title {
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  .boards__item {
    height: 70px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .boards__item {
      height: 80px;
    }
  }
</style>

<article class={`boards__item ${color}`}>
  <a href={generateLink(name, id)} class="boards__link btn">
    <h3 class="boards__title">{ name }</h3>
  </a>
</article>
