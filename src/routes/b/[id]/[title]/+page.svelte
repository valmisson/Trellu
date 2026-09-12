<script>
  import { page } from '$app/stores';
  import Board from '$lib/views/Board.svelte';

  $: boardID = $page.params.id;
</script>

<Board boardID={boardID} />
