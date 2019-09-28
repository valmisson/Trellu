<script>
  export let onClick
</script>

<style>
  .btn-create {
    background-color: var(--grey-dark);
    color: var(--text-light);
    height: 80px;
    margin-bottom: 20px;
  }
</style>

<button class="btn btn-create" on:click={onClick}>CRIAR QUADRO</button>
