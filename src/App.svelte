<script>
  import RouterView from './routes'

  import { formCreate } from '@store'

  import FormCreateBoard from '@components/layout/FormCreateBoard.svelte'
</script>

{#if $formCreate}
  <FormCreateBoard />
{/if}

<RouterView />
