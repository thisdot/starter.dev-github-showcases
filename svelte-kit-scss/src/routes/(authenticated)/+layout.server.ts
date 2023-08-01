import type { LayoutServerLoad } from './$types';
import { UserService } from '$lib/services';

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
  const userService = new UserService(fetch);
  const authenticatedUser = await userService.getAuthenticatedUser();
  locals.user = authenticatedUser;
  return authenticatedUser;
};
