import { AUTH_COOKIE_ERASE_OPTIONS, AUTH_COOKIE_NAME } from '$lib/constants/auth';
import { ENV } from '$lib/constants/env';
import { HEADER_NAMES } from '$lib/constants/headers';
import type { Handle, HandleFetch } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const accessTokenFromCookies = event.cookies.get(AUTH_COOKIE_NAME);

  event.locals.accessToken = accessTokenFromCookies;

  if (!accessTokenFromCookies) {
    if (!event.url.pathname.startsWith('/signin')) {
      return Response.redirect(`${event.url.origin}/signin`, 301);
    }
  }

  if (event.url.pathname.startsWith('/signin')) {
    if (accessTokenFromCookies) {
      return Response.redirect(`${event.url.origin}`);
    }
  }

  // erase token cookie
  if (event.url.pathname === '/logout') {
    event.cookies.set(AUTH_COOKIE_NAME, String(), AUTH_COOKIE_ERASE_OPTIONS);
    event.locals.accessToken = undefined;
    event.locals.user = undefined;
  }

  return resolve(event);
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }): Promise<Response> => {
  if (request.url.startsWith(ENV.GITHUB_URL)) {
    const token = event.locals.accessToken;
    if (token) {
      request.headers.set(HEADER_NAMES.AUTHORIZATION, `Bearer ${token}`);
    }
  }

  return fetch(request);
};
