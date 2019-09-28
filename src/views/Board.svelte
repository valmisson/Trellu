<script>
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  :global(.btn-width) {
    min-width: 295px;
    margin-right: 15px;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.08);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.12);
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

  .list {
    background-color: var(--list-bg);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: hidden;
    padding: 15px 5px 15px 10px;
  }

  .list-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  .list-header-title {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 500;
    margin: 0 12px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-header-options {
    display: flex;
  }

  .options-add {
    color: var(--text-light);
    font-size: 15px;
    margin-right: 5px;
  }

  .options-menu {
    color: var(--text-light);
  }

  .list-cards {
    margin-top: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
  }

  .list-card {
    background-color: var(--white);
    border-radius: 3px;
    padding: 10px 10px 20px 10px;
    margin-bottom: 10px;
  }

  .list-card:last-child {
    margin-bottom: 0;
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
    <article class="list-wrapper">
      <div class="list">
        <header class="list-header">
          <h3 class="list-header-title">To Do</h3>

          <nav class="list-header-options">
            <button class="options-add icon-add"></button>
            <button class="options-menu icon-options"></button>
          </nav>
        </header>

        <ul class="list-cards">
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Sprint</li>
          <li class="list-card">Design Empatia</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
        </ul>
      </div>
    </article>

    <article class="list-wrapper">
      <div class="list">
        <header class="list-header">
          <h3 class="list-header-title">In Progress</h3>

          <nav class="list-header-options">
            <button class="options-add icon-add"></button>
            <button class="options-menu icon-options"></button>
          </nav>
        </header>

        <ul class="list-cards">
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Sprint</li>
          <li class="list-card">Design Empatia</li>
          <li class="list-card">Design Thinking</li>
          <li class="list-card">Design Thinking</li>
        </ul>
      </div>
    </article>

    <article class="list-wrapper list-add">
      <ButtonCreate title="CRIAR LISTA" classWidth="btn-width" />
    </article>
  </section>
</main>
