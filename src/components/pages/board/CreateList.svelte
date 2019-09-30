<script>
  import { fade } from 'svelte/transition'
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'

  let showFormCreateList = false

  const toggleFormCreateList = () => showFormCreateList = !showFormCreateList
</script>

<style>
  :global(.btn-width) {
    min-width: 275px;
    margin-right: 15px;
  }

  .form-create-list {
    background-color: var(--list-bg);
    padding: 10px;
    position: absolute;
    top: 0;
    min-width: inherit;
  }

  .form-create-list > input {
    width: 100%;
  }

  .form-create-list > div {
    align-items: center;
    display: flex;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    :global(.btn-width) {
      min-width: 295px;
    }
  }
</style>

<ButtonCreate title="CRIAR LISTA" classWidth="btn-width" onClick={toggleFormCreateList} />

{#if showFormCreateList}
  <div class="form-create-list" transition:fade>
    <input type="text" placeholder="Digite o nome da lista">
    <div>
      <button class="btn-create btn btn-primary">CRIAR LISTA</button>
      <button class="btn-close icon-close" on:click={toggleFormCreateList}></button>
    </div>
  </div>
{/if}
