<script>
  import { fade } from 'svelte/transition'

  import { lists } from '@store'
  import { UID } from '@utils'
  import { ListsDB } from '@datastore'

  import ButtonCreate from '@components/modules/ButtonCreate.svelte'
  import ClickOutside from '@components/modules/ClickOutside.svelte'

  export let boardID

  let showFormCreateList = false
  let name = ''

  let buttonCreateElem
  let formCreateListElem

  function toggleFormCreateList () {
    name = ''

    showFormCreateList = !showFormCreateList
  }

  /* update list on store */
  function updateListStore (listCreated) {
    $lists.push(listCreated)

    const oldList = $lists

    lists.update(l => oldList)
  }

  async function createList () {
    if (!name) return

    const id = UID()

    const listCreated = await ListsDB.create({ id, name, board: boardID })

    updateListStore(listCreated)

    name = ''
  }
</script>

<style>
  :global(.btn-width) {
    min-width: 250px;
    margin-right: 15px;
  }

  .lists__create {
    background-color: var(--list-bg);
    padding: 10px;
    position: absolute;
    top: 0;
    min-width: inherit;
  }

  .lists__create > input {
    width: 100%;
  }

  .lists__create > div {
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

<div bind:this={buttonCreateElem}>
  <ButtonCreate title="CRIAR LISTA" classWidth="btn-width" on:click={toggleFormCreateList} />
</div>

{#if showFormCreateList}
  <!-- hide form on click outside element -->
  <ClickOutside exclude={[buttonCreateElem, formCreateListElem]} on:outside={toggleFormCreateList} />

  <div class="lists__create" bind:this={formCreateListElem} transition:fade>
    <!-- svelte-ignore a11y-autofocus -->
    <input type="text" placeholder="Digite o nome da lista"
      bind:value={name} on:keydown="{e => e.which === 13 && createList()}" autofocus>

    <div>
      <button class="btn btn--primary" on:click={createList} disabled={!name}>CRIAR LISTA</button>
      <button class="btn--close icon-close" on:click={toggleFormCreateList}></button>
    </div>
  </div>
{/if}
