// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { User } from '$lib/interfaces';
declare global{
    declare namespace App {
        interface Locals {
            user: import('$lib/types').User;
        }
    }
}
