<script lang="ts">
  import { configureServices } from '$lib/services/configure-services';
  import './styles.scss';

  export const prerender = true;
  configureServices();
</script>

<slot />
