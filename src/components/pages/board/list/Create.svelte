<script>
  import { fade } from 'svelte/transition'
  import ButtonCreate from '@components/modules/ButtonCreate.svelte'
  import UID from '@utils/uid.js'
  import ListsBD from '@datastore/Lists.js'

  export let board

  let showFormCreateList = false
  let name = ''

  function toggleFormCreateList () {
    showFormCreateList = !showFormCreateList
  }

  async function createList () {
    const id = UID()

    await ListsBD.create({ id, name, board })

    name = ''
    toggleFormCreateList()
  }
</script>

<style>
  :global(.btn-width) {
    min-width: 250px;
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
    <input type="text" placeholder="Digite o nome da lista" bind:value={name}>

    <div>
      <button class="btn-create btn btn-primary" on:click={createList} disabled={!name}>CRIAR LISTA</button>
      <button class="btn-close icon-close" on:click={toggleFormCreateList}></button>
    </div>
  </div>
{/if}
