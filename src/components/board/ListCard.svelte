<script>
  export let title
</script>

<style>
  .list-card {
    background-color: var(--white);
    border-radius: 3px;
    padding: 10px 10px 20px 10px;
    margin-bottom: 10px;
  }

  .list-card:last-child {
    margin-bottom: 0;
  }
</style>

<li class="list-card">{ title }</li>
