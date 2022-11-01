import { ENV } from '$lib/constants/env';
import { setContext } from 'svelte';
import { AuthService } from '.';

export function configureServices(): void {
  setContext(
    AuthService,
    new AuthService(ENV.API_URL, ENV.CLIENT_REDIRECT_URL)
  );
}
