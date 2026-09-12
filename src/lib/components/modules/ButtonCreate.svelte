<script>
  let { title, classWidth, onclick } = $props()
</script>

<style>
  .btn--create {
    background-color: var(--grey);
    color: var(--text-light);
    height: 70px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .btn--create {
      height: 80px;
    }
  }
</style>

<button class={`btn--create btn ${classWidth}`} {onclick}>{title}</button>
