import type { PageServerLoad } from './$types';
import type { UserApiResponse, UserOrgsApiResponse, UserReposApiResponse } from '$lib/interfaces';
import { mapUserInfoResponseToUserInfo, mapUserOrgsApiResponseToUserOrgs, mapUserReposToTopRepos } from '$lib/helpers';
import { ENV } from '$lib/constants/env';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const fetchUserInfoUrl = new URL(`/users/${params.username}`, ENV.GITHUB_URL);
  const fetchUserReposUrl = new URL(`/users/${params.username}/repos`, ENV.GITHUB_URL);
  const [userInfo, userOrgs, userRepos] = await Promise.all([
    fetch(fetchUserInfoUrl.toString()).then(
      (response) => response.json() as Promise<UserApiResponse>
    ),
    fetch(`https://api.github.com/user/orgs`).then(
      (response) => response.json() as Promise<UserOrgsApiResponse>
    ),
    fetch(fetchUserReposUrl.toString()).then(
      (response) => response.json() as Promise<UserReposApiResponse>
    ),
  ]);

  return {
    userInfo: mapUserInfoResponseToUserInfo(userInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs),
    userRepos: mapUserReposToTopRepos(userRepos),
    username: params.username
  };
};
