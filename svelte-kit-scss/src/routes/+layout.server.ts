import type { LayoutServerLoad } from './$types';
import { mapUserInfoResponseToUserInfo } from '$lib/helpers/user';

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    userInfo: mapUserInfoResponseToUserInfo(locals.authenticatedUserInfo),
  };
};
