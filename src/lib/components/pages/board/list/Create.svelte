<script>
  import { fade } from 'svelte/transition'

  import { lists } from '$lib/store'
  import { UID } from '$lib/utils'
  import { ListsDB } from '$lib/datastore'

  import ButtonCreate from '$lib/components/modules/ButtonCreate.svelte'
  import ClickOutside from '$lib/components/modules/ClickOutside.svelte'

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

    lists.update(() => $lists)
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
  <ButtonCreate title="CRIAR LISTA" classWidth="btn-width" onclick={toggleFormCreateList} />
</div>

{#if showFormCreateList}
  <!-- hide form on click outside element -->
  <ClickOutside exclude={[buttonCreateElem, formCreateListElem]} onoutside={toggleFormCreateList} />

  <div class="lists__create" bind:this={formCreateListElem} transition:fade>
    <!-- svelte-ignore a11y-autofocus -->
    <input type="text" placeholder="Digite o nome da lista"
      bind:value={name} onkeydown={(e) => e.which === 13 && createList()} autofocus>

    <div>
      <button class="btn btn--primary" onclick={createList} disabled={!name}>CRIAR LISTA</button>
      <button class="btn--close icon-close" onclick={toggleFormCreateList} aria-label="Fechar formulário de criação da lista" title="Fechar formulário de criação da lista"></button>
    </div>
  </div>
{/if}
