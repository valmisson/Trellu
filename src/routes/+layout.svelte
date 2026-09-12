<script>
  import { onMount } from 'svelte';
  import '../assets/styles/main.css';
  import App from '../App.svelte';

  onMount(() => {
    import('../assets/javascript/pwa.install');
    import('../assets/javascript/popup.ios.intall');
  });
</script>

<App>
  <slot />
</App>
