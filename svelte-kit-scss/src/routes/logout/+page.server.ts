import { redirect } from '@sveltejs/kit';
import { AUTH_COOKIE_ERASE_OPTIONS, AUTH_COOKIE_NAME } from '$lib/constants/auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // we only use this endpoint for the api
  // and don't need to see the page
  throw redirect(302, '/');
};

export const actions: Actions = {
  default({ cookies, locals }) {
    // eat the cookie
    cookies.set(AUTH_COOKIE_NAME, String(), AUTH_COOKIE_ERASE_OPTIONS);
    locals.accessToken = undefined;
    locals.user = undefined;

    // redirect the user
    throw redirect(302, '/signin');
  },
};
