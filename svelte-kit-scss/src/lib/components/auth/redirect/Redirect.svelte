<script lang="ts">
  import { AuthService } from '$lib/services';
  import { isAuthenticated, token } from '$lib/stores/auth';
  import { getContext, onDestroy, onMount } from 'svelte';
  import cookie from 'cookie';
  import { goto } from '$app/navigation';
  import { AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS } from '$lib/constants/auth';
  import { get } from 'svelte/store';

  const authService = getContext<AuthService>(AuthService);
  const unsubscribe = isAuthenticated.subscribe((authenticated) => {
    if (authenticated) {
      const authToken = get(token) || String();
      document.cookie = cookie.serialize(AUTH_COOKIE_NAME, authToken, AUTH_COOKIE_OPTIONS);
      goto('/');
    }
  });

  onMount(() => {
    authService.saveUserToken();
  });
  onDestroy(() => {
    unsubscribe();
  });
</script>

<div>Redirecting...</div>