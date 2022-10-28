// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { User } from '$lib/types';
 
declare global {
  namespace App {
    interface Locals {
      user: User;
      accessToken: string | undefined;
    }
  }
}