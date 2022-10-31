import { ENV } from '$lib/constants/env';
import { remapContextUserAsync } from '$lib/helpers/context-user';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
  if (locals.accessToken) {
    const getContextUserUrl = new URL('/user', ENV.GITHUB_URL);
    const response = await fetch(getContextUserUrl);
    const contextUser = await remapContextUserAsync(response);
    locals.user = contextUser;
  }
};
