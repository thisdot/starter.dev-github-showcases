import { writable } from 'svelte/store';

export const currentPageId = writable<string | undefined>(undefined);
