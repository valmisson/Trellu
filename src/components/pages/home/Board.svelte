<script>
  import { generateLink } from '@utils'

  export let board

  const { id, name, background } = board
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
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
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

<article class={`boards__item ${background}`}>
  <a href={generateLink(name, id)} class="boards__link btn" title={name}>
    <h3 class="boards__title">{ name }</h3>
  </a>
</article>
