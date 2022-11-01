import type { PageServerLoad } from './$types';
import type { UserApiResponse, UserOrgsApiResponse } from '$lib/interfaces';
import { mapUserInfoResponseToUserInfo, mapUserOrgsApiResponseToUserOrgs } from '$lib/helpers/user';
import { ENV } from '$lib/constants/env';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const fetchUserInfoUrl = new URL(`/users/${params.username}`, ENV.GITHUB_URL);
  const [userInfo, userOrgs] = await Promise.all([
    fetch(fetchUserInfoUrl.toString()).then(
      (response) => response.json() as Promise<UserApiResponse>
    ),
    fetch(`https://api.github.com/user/orgs`).then(
      (response) => response.json() as Promise<UserOrgsApiResponse>
    ),
  ]);
  return {
    userInfo: mapUserInfoResponseToUserInfo(userInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs),
  };
};
