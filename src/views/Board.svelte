<script>
  import Header from '@components/pages/board/Header.svelte'
  import BoardLists from '@components/pages/board/BoardLists.svelte'

  const mochaList = [
    {
      id: 'ascve',
      title: 'To Do',
      lists: [
        'Design Thinking',
        'Design Sprint',
        'Motion',
        'UI',
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

  @media (min-width: 768px) {
    .board {
      padding-left: 35px;
    }
  }

  @media (min-width: 1200px) {
    .board {
      padding-left: 65px;
    }
  }
</style>

<main class="board">
  <Header title="Aprenda User Experience" color="blue" />

  <BoardLists lists={mochaList} />
</main>
