<script>
  import CreateList from '@components/pages/board/CreateList.svelte'
  import List from '@components/pages/board/List.svelte'

  const mochaList = [
    {
      id: 'ascve',
      title: 'To Do',
      lists: [
        'Design Thinking',
        'Design Sprint',
        'Motion',
        'UI'
      ]
    },
    {
      id: 'avehs',
      title: 'In Progress',
      lists: [
        'Design System'
      ]
    },
    {
      id: 'eggha',
      title: 'Done',
      lists: [
        'Empatia',
        'Research'
      ]
    }
  ]
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  .board {
    padding-left: 15px;
  }

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

  .board-lists {
    display: flex;
    margin-top: 30px;
    max-height: 75vh;
    overflow-x: auto;
    overflow-y: hidden;
    user-select: none;
  }

  .list-wrapper {
    margin-right: 15px;
    min-width: 275px;
    margin-bottom: 20px;
  }

  /* list create */

  .list-create {
    position: relative;
  }

  @media (min-width: 768px) {
    .board {
      padding-left: 35px;
    }

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

    .board-lists {
      margin-top: 40px;
    }

    .list-wrapper {
      min-width: 295px;
    }

  }

  @media (min-width: 1200px) {
    .board {
      padding-left: 65px;
    }

    .board-lists {
      margin-top: 40px;
      max-height: 72vh;
    }
  }
</style>

<main class="board">
  <header class="board-header">
    <div class="board-title">
      <span class="board-title-color blue"></span>
      <h2>Aprenda User Experience</h2>
    </div>
  </header>

  <section class="board-lists">
    {#each mochaList as list}
      <article class="list-wrapper">
        <List list={list}/>
      </article>
    {/each}

    <article class="list-wrapper list-create">
      <CreateList />
    </article>
  </section>
</main>
