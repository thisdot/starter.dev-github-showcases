import type { PageServerLoad } from './$types';
import {
  buildRepositoryCardViewModel,
  buildRepositoryPageNavigationFilterOptions,
  extractRepositoryPageSearchQueryParameters,
  remapRepositorySearchQueryParameters,
} from '$lib/helpers';
import { OrganizationService, UserService, RepositorySearchService } from '$lib/services';
import type { AllRepositoriesListViewModel } from '$lib/components/RepositoryList/view-models';
import { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';
import { ProfileType, type SimpleUser } from '$lib/interfaces';

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
  let organizationMembers: SimpleUser[] | undefined = undefined;
  if (profile.type === ProfileType.Organization) {
    organizationMembers = await organizationService.listOrganizationMembers(profile.login);
  }

  const allRepositoriesListViewModel: AllRepositoriesListViewModel = {
    repositories: repositories.map(buildRepositoryCardViewModel),
    controls: {
      sortFilters: buildRepositoryPageNavigationFilterOptions(
        url,
        searchQueryParameters,
        'sort',
        MAP_FILTER_LABEL_SORT
      ),
      typeFilters: buildRepositoryPageNavigationFilterOptions(
        url,
        searchQueryParameters,
        'type',
        MAP_FILTER_LABEL_TYPE
      ),
      search: {
        term: searchQueryParameters.term,
      },
    },
  };

  return {
    profile,
    organizations,
    allRepositoriesListViewModel,
    username,
    organizationMembers,
  };
};
