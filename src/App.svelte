<script>
  import RouterView from './routes'

  import { formCreate } from './store'

  import LayoutHeader from './components/layout/Header.svelte'
  import FormCreateBoard from './components/layout/FormCreateBoard.svelte'
</script>

{#if $formCreate}
  <FormCreateBoard />
{/if}

<LayoutHeader />

<RouterView />
