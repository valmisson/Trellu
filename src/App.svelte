<script>
  import { formCreate } from '$lib/store'

  import Header from '$lib/components/layout/Header.svelte'
  import FormCreateBoard from '$lib/components/layout/FormCreateBoard.svelte'
</script>

{#if $formCreate}
  <FormCreateBoard />
{/if}

<Header />

<slot />
