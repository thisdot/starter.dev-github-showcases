import type { PageServerLoad } from './$types';
import {
  buildRepositoryCardViewModel,
  buildRepositoryPageNavigationFilterOptions,
  createLanguageMap,
  extractRepositoryPageSearchQueryParameters,
  remapRepositorySearchQueryParameters,
} from '$lib/helpers';
import { OrganizationService, UserService, RepositorySearchService } from '$lib/services';
import type { AllRepositoriesListViewModel } from '$lib/components/RepositoryList/view-models';
import { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';

const MAP_FILTER_LABEL_SORT = new Map<RepositorySearchSort, string>([
  [RepositorySearchSort.LastUpdated, 'Last updated'],
  [RepositorySearchSort.Name, 'Name'],
  [RepositorySearchSort.Stars, 'Stars'],
]);

const MAP_FILTER_LABEL_TYPE = new Map<RepositorySearchType, string>(
  Object.entries(RepositorySearchType).map(([key, value]) => [value, key]) as Iterable<
    [RepositorySearchType, string]
  >
);

export const load: PageServerLoad = async ({ fetch, params: { username }, url }) => {
  const pageSearchQueryParameters = extractRepositoryPageSearchQueryParameters(url);
  const searchQueryParameters = remapRepositorySearchQueryParameters(pageSearchQueryParameters);

  const userService = new UserService(fetch);
  const organizationService = new OrganizationService(fetch);
  const repositorySearchService = new RepositorySearchService(fetch);

  const [profile, organizations, { items: repositories }] = await Promise.all([
    userService.getUserProfile(username),
    organizationService.listOrganizationsForUser(username),
    repositorySearchService.searchRepositoriesForUser(username, searchQueryParameters),
  ]);

  const allRepositoriesListViewModel: AllRepositoriesListViewModel = {
    repositories: repositories.map(buildRepositoryCardViewModel),
    sortFilters: buildRepositoryPageNavigationFilterOptions(
      'sort',
      MAP_FILTER_LABEL_SORT,
      url,
      searchQueryParameters
    ),
    typeFilters: buildRepositoryPageNavigationFilterOptions(
      'type',
      MAP_FILTER_LABEL_TYPE,
      url,
      searchQueryParameters
    ),
  };

  return {
    profile,
    organizations,
    allRepositoriesListViewModel,
    username,
    repoLanguageList: createLanguageMap(repositories),
  };
};
