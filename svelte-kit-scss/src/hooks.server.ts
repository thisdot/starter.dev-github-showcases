import {
  AUTH_COOKIE_ERASE_OPTIONS,
  AUTH_COOKIE_NAME,
  AUTH_COOKIE_OPTIONS,
} from '$lib/constants/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  console.log('here', event.url.href);
  const accessTokenFromCookies = event.cookies.get(AUTH_COOKIE_NAME);
  console.log('[accessTokenFromCookies]', accessTokenFromCookies);

  // restore token from cookies
  if (!accessTokenFromCookies) {
    if (!event.url.pathname.startsWith('/signin')) {
      return Response.redirect(`${event.url.origin}/signin`, 301);
    }
  }

  if (event.url.pathname === '/signin') {
    event.cookies.set(AUTH_COOKIE_NAME, String(), AUTH_COOKIE_ERASE_OPTIONS);
  }

  // redirect route
  if (event.url.pathname === '/redirect') {
    return Response.redirect(`${event.url.origin}/signin/redirect`, 301);
  }

  const response = await resolve(event);
  return response;
};
