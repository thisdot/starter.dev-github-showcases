<script lang="ts">
  import { AuthService } from "$lib/services";
  import { getContext } from "svelte";
  const authService = getContext<AuthService>(AuthService);
  const onSubmit = () => {
    authService.signIn();
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <input type="hidden" class="input" name="csrfToken" />
  <input type="hidden" class="input" name="callbackUrl" />
  <button type="submit" class="button">Sign in with GitHub</button>
</form>

<style lang="scss">
</style>
