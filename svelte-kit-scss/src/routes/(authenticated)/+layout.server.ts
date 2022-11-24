import { ENV } from '$lib/constants/env';
import { remapContextUserAsync } from '$lib/helpers/context-user';
import type { LayoutServerLoad } from './$types';
import { mapUserInfoResponseToUserInfo } from '$lib/helpers/user';

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
  const getContextUserUrl = new URL('/user', ENV.GITHUB_URL);
  const response = await fetch(getContextUserUrl.toString());
  const contextUser = await remapContextUserAsync(response);
  locals.user = contextUser;
  return {
    userInfo: mapUserInfoResponseToUserInfo(locals.user),
  };
};
