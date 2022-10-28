import {
  AUTH_COOKIE_NAME,
} from '$lib/constants/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const accessTokenFromCookies = event.cookies.get(AUTH_COOKIE_NAME);

  if (!accessTokenFromCookies) {
    if (!event.url.pathname.startsWith('/signin')) {
      return Response.redirect(`${event.url.origin}/signin`, 301);
    }
  }

  const response = await resolve(event);
  return response;
};