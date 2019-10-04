<script>
  export let name
  export let color
</script>

<style>
  .board-header {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-right: 15px;
  }

  .board-title {
    align-items: center;
    display: flex;
    overflow: hidden;
  }

  .board-title-color {
    height: 20px;
    min-width: 5px;
  }

  .board-title > h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .board-header {
      margin-top: 40px;
    }

    .board-title-color {
      height: 25px;
    }

    .board-title > h2 {
      font-size: 20px;
      margin-left: 20px;
    }
  }
</style>

<header class="board-header">
  <div class="board-title">
    <span class={`board-title-color ${color}`}></span>
    <h2>{ name }</h2>
  </div>
</header>
