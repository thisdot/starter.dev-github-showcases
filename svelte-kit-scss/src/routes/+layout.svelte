<script lang="ts">
  import { configureServices } from '$lib/services/configure-services';
  import './styles.scss';

  configureServices();
</script>

<slot />
