import type { LayoutServerLoad } from './$types';
import { UserService } from '$lib/services';
import { AUTH_COOKIE_NAME } from '$lib/constants/auth';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals, fetch, cookies }) => {
  const token = cookies.get(AUTH_COOKIE_NAME);
  if (token) {
    const userService = new UserService(fetch);
    const authenticatedUser = await userService.getAuthenticatedUser();
    locals.user = authenticatedUser;
    return authenticatedUser;
  } else {
    throw redirect(303, '/signin');
  }
};
