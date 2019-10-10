<script>
  import { createEventDispatcher } from 'svelte'

  export let exclude = []

  const dispatch = createEventDispatcher()

  function isExcluded(target) {
    let parent = target

    while (parent) {
      if (exclude.indexOf(parent) >= 0) return true

      parent = parent.parentNode
    }

    return false
  }

  function onClickOutside (event) {
    if (!isExcluded(event.target)) dispatch('outside')
  }
</script>

<svelte:window on:click={onClickOutside} />
