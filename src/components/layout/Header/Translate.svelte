<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { t, locale } from 'svelte-i18n'
  import ClickOutside from '@components/modules/ClickOutside.svelte'

  let translateElem
  let currentLang
  let showFlags = false

  const changeLang = lang => {
    currentLang = lang
    showFlags = false

    locale.set(lang)

    localStorage.setItem('lang', lang)
  }

  onMount(() => {
    currentLang = localStorage.getItem('lang') || 'br'

    locale.set(currentLang)
  })
</script>

<style>
  .translate {
    position: relative;
  }

  .translate__flags {
    background-color: var(--bg);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 10px 5px 5px 5px;
    top: 40px;
    right: 0;
    z-index: 999;
  }

  .translate__flag--img {
    width: 28px;
  }

  .translate__flags--button {
    align-items: center;
    display: flex;
  }

  .translate__flags--button:first-child {
    margin-bottom: 5px;
  }

  .translate__flag--text {
    color: var(--text-dark);
    margin-left: 10px;
  }
</style>

<!-- hide menu on click outside element -->
<ClickOutside exclude={[translateElem]} on:outside={() => showFlags = false}/>

<div class="translate" bind:this={translateElem}>
  <button on:click={() => showFlags = !showFlags} class="translate__change">
    <img class="translate__flag--img" src={`icons/icon-flag-${currentLang}.svg`}
      alt="selected country flag" />
  </button>

  {#if showFlags}
    <div class="translate__flags" transition:fade>
      <button on:click={() => changeLang('br')} class="translate__flags--button">
        <img class="translate__flag--img" src="icons/icon-flag-br.svg" alt="country flags" />
        <span class="translate__flag--text">{$t(`header.translate.br`)}</span>
      </button>

      <button on:click={() => changeLang('en')} class="translate__flags--button">
        <img class="translate__flag--img" src="icons/icon-flag-en.svg" alt="country flags" />
        <span class="translate__flag--text">{$t(`header.translate.en`)}</span>
      </button>
    </div>
  {/if}
</div>
