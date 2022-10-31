// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { ContextUser } from "$lib/interfaces/context-user";
declare global {
  declare namespace App {
    interface Locals {
      accessToken?: string;
      user?: ContextUser;
    }
  }
}