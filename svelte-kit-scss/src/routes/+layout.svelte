<script lang="ts">
  import NavigationProgress from '$lib/components/NavigationProgress/NavigationProgress.svelte';
  import { configureServices } from '$lib/services/configure-services';
  import './styles.scss';

  configureServices();
</script>

<NavigationProgress />
<slot />
