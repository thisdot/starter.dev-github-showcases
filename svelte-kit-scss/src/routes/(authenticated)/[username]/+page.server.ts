import type { PageServerLoad } from './$types';
import type { UserApiResponse, UserOrgsApiResponse, UserReposApiResponse } from '$lib/interfaces';
import {
  createLanguageMap,
  mapUserInfoResponseToUserInfo,
  mapUserOrgsApiResponseToUserOrgs,
  mapUserReposApiResponseToUserReposStates,
} from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import { SortFilters } from '$lib/enums';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const fetchUserInfoUrl = new URL(`/users/${params.username}`, ENV.GITHUB_URL);
  const fetchUserOrgsUrl = new URL(`/users/${params.username}`, ENV.GITHUB_URL);
  const fetchReposUrl = new URL(`/users/${params.username}/repos`, ENV.GITHUB_URL);
  fetchReposUrl.searchParams.append('sort', SortFilters.UPDATED);

  const [userInfo, userOrgs, userRepos] = await Promise.all([
    fetch(fetchUserInfoUrl).then((response) => response.json() as Promise<UserApiResponse>),
    fetch(fetchUserOrgsUrl).then((response) => response.json() as Promise<UserOrgsApiResponse>),
    fetch(fetchReposUrl).then((response) => response.json() as Promise<UserReposApiResponse>),
  ]);

  const userReposList = mapUserReposApiResponseToUserReposStates(userRepos);

  return {
    userInfo: mapUserInfoResponseToUserInfo(userInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs),
    userRepos: userReposList,
    username: params.username,
    repoLanguageList: createLanguageMap(userReposList),
  };
};
