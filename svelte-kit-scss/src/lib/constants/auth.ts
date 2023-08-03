import type { CookieSerializeOptions } from 'cookie';

export const AUTH_COOKIE_NAME = 'access_token';

export const AUTH_COOKIE_OPTIONS: CookieSerializeOptions = {
  path: '/',
};

export const AUTH_COOKIE_ERASE_OPTIONS: CookieSerializeOptions = {
  ...AUTH_COOKIE_OPTIONS,
  maxAge: -1,
};
