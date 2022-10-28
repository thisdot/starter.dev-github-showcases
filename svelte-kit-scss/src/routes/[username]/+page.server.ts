import type { PageServerLoad } from './$types';
import type { UserOrgsApiResponse } from '../../lib/interfaces';
import {
  mapUserInfoResponseToUserInfo,
  mapUserOrgsApiResponseToUserOrgs,
} from '../../lib/helpers/user';

export const load: PageServerLoad = async ({ fetch, locals }) => {
  const url = `https://api.github.com/user/orgs`;
  const userOrgsResponse = await fetch(url);
  const userOrgs = (await userOrgsResponse.json()) as UserOrgsApiResponse;
  return {
    userInfo: mapUserInfoResponseToUserInfo(locals.authenticatedUserInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs),
  };
};
