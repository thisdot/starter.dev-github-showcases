import {
  AUTH_COOKIE_ERASE_OPTIONS,
  AUTH_COOKIE_NAME,
} from '$lib/constants/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const accessTokenFromCookies = event.cookies.get(AUTH_COOKIE_NAME);

  event.locals.accessToken = accessTokenFromCookies;

  if (!accessTokenFromCookies) {
    if (!event.url.pathname.startsWith('/signin')) {
      return Response.redirect(`${event.url.origin}/signin`, 301);
    }
  }

  // erase token cookie
  if (event.url.pathname === '/signin') {
    event.cookies.set(AUTH_COOKIE_NAME, String(), AUTH_COOKIE_ERASE_OPTIONS);
    event.locals.accessToken = undefined;
  }else {
    event.locals.user = {
      username: 'iansamz'
    }
  }


  const response = await resolve(event);
  return response;
};
