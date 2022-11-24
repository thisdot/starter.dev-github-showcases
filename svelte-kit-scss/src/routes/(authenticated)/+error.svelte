<script>
  import { page } from '$app/stores';
  import ErrorMain from '$lib/components/ErrorPage/ErrorMain.svelte';
  import ErrorFlash from '$lib/components/ErrorPage/ErrorFlash.svelte';
</script>

<ErrorFlash message={$page.error?.message} />
<ErrorMain status={$page.status} />
