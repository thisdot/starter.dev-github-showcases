<script>

  import Auth from "$lib/components/auth/Auth.svelte";
  import { isAuthenticated } from "$lib/stores/auth";

</script>

<div>
  <Auth/>
  {$isAuthenticated}
</div>
