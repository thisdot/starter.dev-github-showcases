import type { LayoutServerLoad } from '../../$types';
import { AUTH_COOKIE_NAME } from '$lib/constants/auth';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies }) => {
  const token = cookies.get(AUTH_COOKIE_NAME);
  if (token) {
    throw redirect(303, '/');
  }
};
