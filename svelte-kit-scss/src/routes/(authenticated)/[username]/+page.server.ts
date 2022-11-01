import type { PageServerLoad } from './$types';
import type { UserApiResponse, UserOrgsApiResponse, UserReposApiResponse } from '$lib/interfaces';
import {
  mapUserInfoResponseToUserInfo,
  mapUserOrgsApiResponseToUserOrgs,
  mapUserReposApiResponseToUserReposStates,
} from '$lib/helpers/user';
import { ENV } from '$lib/constants/env';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const fetchUserInfoUrl = new URL(`/users/${params.username}`, ENV.GITHUB_URL);
  const fetchUserOrgsUrl = new URL(`/users/${params.username}`, ENV.GITHUB_URL);
  const fetchReposUrl = new URL(`/users/${params.username}/repos`, ENV.GITHUB_URL);

  const [userInfo, userOrgs, userRepos] = await Promise.all([
    fetch(fetchUserInfoUrl).then((response) => response.json() as Promise<UserApiResponse>),
    fetch(fetchUserOrgsUrl).then((response) => response.json() as Promise<UserOrgsApiResponse>),
    fetch(fetchReposUrl).then((response) => response.json() as Promise<UserReposApiResponse>),
  ]);
  return {
    userInfo: mapUserInfoResponseToUserInfo(userInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs),
    userRepos: mapUserReposApiResponseToUserReposStates(userRepos),
  };
};
