<script>
  export let title
  export let classWidth
</script>

<style>
  .btn-create {
    background-color: var(--grey);
    color: var(--text-light);
    height: 70px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .btn-create {
      height: 80px;
    }
  }
</style>

<button class={`btn btn-create ${classWidth}`} on:click>{ title }</button>
