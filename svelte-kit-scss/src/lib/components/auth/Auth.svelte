<script lang="ts">
  import { AuthService } from '$lib/services';
  import { getContext } from 'svelte';
  const authService = getContext<AuthService>(AuthService);
  const onSubmit = () => {
    authService.signIn();
  };
</script>

<div class="page">
  <form class="form" on:submit|preventDefault={onSubmit}>
    <input type="hidden" class="input" name="csrfToken" />
    <input type="hidden" class="input" name="callbackUrl" />
    <button type="submit" class="button">Sign in with GitHub</button>
  </form>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables';

  .page {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: variables.$black;
    color: variables.$gray500;
  }

  .form {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .button {
    width: 34%;
    padding: 1rem;
    border: 1px solid variables.$gray500;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 100%;
    background: variables.$black;
    color: variables.$gray500;
    cursor: pointer;

    &:hover {
      background: variables.$gray500;
      color: variables.$black;
    }
  }
</style>
