<script>
  export let title
  export let onClick
  export let classWidth
</script>

<style>
  .btn-create {
    background-color: var(--grey);
    color: var(--text-light);
    height: 80px;
    margin-bottom: 20px;
  }
</style>

<button class={`btn btn-create ${classWidth}`} on:click={onClick}>{ title }</button>
