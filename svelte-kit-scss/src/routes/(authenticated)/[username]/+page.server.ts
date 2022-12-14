import type { PageServerLoad } from './$types';
import {
  buildRepositoryCardViewModel,
  createLanguageMap,
  extractRepositoryPageSearchQueryParameters,
  remapRepositorySearchQueryParameters,
} from '$lib/helpers';
import { OrganizationService, UserService, RepositorySearchService } from '$lib/services';
import type { AllRepositoriesListViewModel } from '$lib/components/RepositoryList/view-models';

export const load: PageServerLoad = async ({ fetch, params: { username }, url }) => {
  const pageSearchQueryParameters = extractRepositoryPageSearchQueryParameters(url);
  const searchQueryParameters = remapRepositorySearchQueryParameters(pageSearchQueryParameters);

  const userService = new UserService(fetch);
  const organizationService = new OrganizationService(fetch);
  const repositorySearchService = new RepositorySearchService(fetch);

  const [profile, organizations, repositories] = await Promise.all([
    userService.getUserProfile(username),
    organizationService.listOrganizationsForUser(username),
    repositorySearchService.searchRepositoriesForUser(username, searchQueryParameters),
  ]);

  const allRepositoriesListViewModel: AllRepositoriesListViewModel = {
    repositories: repositories.map(buildRepositoryCardViewModel),
  };

  return {
    profile,
    organizations,
    allRepositoriesListViewModel,
    username,
    repoLanguageList: createLanguageMap(repositories),
  };
};
