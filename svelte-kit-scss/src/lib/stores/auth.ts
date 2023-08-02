import { browser } from '$app/environment';
import { writable, readable, type Writable, get } from 'svelte/store';
import cookie from 'cookie';
import { AUTH_COOKIE_NAME } from '$lib/constants/auth';

let isAuthenticatedInternal: Writable<boolean>;
const loadingInternal = writable<boolean>(false);
let tokenInternal: Writable<string | undefined>;

if (browser) {
  const token = cookie.parse(document.cookie)[AUTH_COOKIE_NAME];
  isAuthenticatedInternal = writable<boolean>(Boolean(token));
  tokenInternal = writable<string | undefined>(token);
} else {
  isAuthenticatedInternal = writable<boolean>(false);
  tokenInternal = writable<string | undefined>();
}

export const startAuthentication = (): void => {
  loadingInternal.set(true);
};

export const setUserToken = (token: string | undefined) => {
  tokenInternal.set(token);
  isAuthenticatedInternal.set(Boolean(token));
  loadingInternal.set(false);
};

export const isAuthenticated = readableForWritable(isAuthenticatedInternal);
export const loading = readableForWritable(loadingInternal);
export const token = readableForWritable(tokenInternal);

function readableForWritable<T>(writable: Writable<T>) {
  return readable<T>(get(writable), (set) => writable.subscribe((x) => set(x)));
}
