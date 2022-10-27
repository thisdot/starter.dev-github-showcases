import { setContext } from 'svelte';
import { AuthService } from '.';

export function configureServices(): void {
  setContext(
    AuthService,
    new AuthService(import.meta.env.VITE_API_URL, import.meta.env.VITE_CLIENT_REDIRECT_URL)
  );
}
