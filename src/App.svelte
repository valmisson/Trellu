<script>
  import RouterView from './routes'

  import { formCreate } from '@store'

  import Header from '@components/layout/Header.svelte'
  import FormCreateBoard from '@components/modules/FormCreateBoard.svelte'
</script>

{#if $formCreate}
  <FormCreateBoard />
{/if}

<Header />

<RouterView />
