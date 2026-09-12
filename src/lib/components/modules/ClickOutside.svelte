<script>
  let { exclude = [], onoutside } = $props()

  function isExcluded(target) {
    let parent = target

    while (parent) {
      if (exclude.includes(parent)) return true

      parent = parent.parentNode
    }

    return false
  }

  function onClickOutside (event) {
    if (!isExcluded(event.target) && onoutside) onoutside(event)
  }
</script>

<svelte:window onclick={onClickOutside} />
