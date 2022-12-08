import type { PageServerLoad } from './$types';
import type { UserReposApiResponse } from '$lib/interfaces';
import { createLanguageMap, mapUserReposApiResponseToUserReposStates } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import { SortFilters } from '$lib/enums';
import { OrganizationService, UserService } from '$lib/services';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const userService = new UserService(fetch);
  const orgService = new OrganizationService(fetch);
  const fetchReposUrl = new URL(`/users/${params.username}/repos`, ENV.GITHUB_URL);
  fetchReposUrl.searchParams.append('sort', SortFilters.UPDATED);

  const [profile, organizations, userRepos] = await Promise.all([
    userService.getUserProfile(params.username),
    orgService.listOrganizationsForUser(params.username),
    fetch(fetchReposUrl).then((response) => response.json() as Promise<UserReposApiResponse>),
  ]);

  const userReposList = mapUserReposApiResponseToUserReposStates(userRepos);

  return {
    profile,
    organizations,
    userRepos: userReposList,
    username: params.username,
    repoLanguageList: createLanguageMap(userReposList),
  };
};
