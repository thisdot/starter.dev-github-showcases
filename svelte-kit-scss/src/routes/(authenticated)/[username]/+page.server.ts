import type { PageServerLoad } from './$types';
import {
  buildRepositoryCardViewModel,
  buildRepositoryPageNavigationFilterOptions,
  buildURLSearchParamsForParameters,
  DEFAULT_REPOSITORY_SEARCH_QUERY_PARAMETERS_REQUIRED,
  extractRepositoryPageSearchQueryParameters,
  isRepositorySearchQueryParametersEqual,
  remapRepositorySearchQueryParameters,
} from '$lib/helpers';
import { OrganizationService, UserService, RepositorySearchService } from '$lib/services';
import type { AllRepositoriesListViewModel } from '$lib/components/RepositoryList/view-models';
import { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';
import { ProfileType, type SimpleUser } from '$lib/interfaces';
import type { PageNavigationTabViewModel } from '$lib/components/shared/PageNavigationTabs/models';
import { PAGE_IDS } from '$lib/constants/page-ids';

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

export const load: PageServerLoad = async ({ fetch, params: { username }, url, parent }) => {
  const pageSearchQueryParameters = extractRepositoryPageSearchQueryParameters(url);
  const searchQueryParameters = remapRepositorySearchQueryParameters(pageSearchQueryParameters);

  const userService = new UserService(fetch);
  const organizationService = new OrganizationService(fetch);
  const repositorySearchService = new RepositorySearchService(fetch);

  const authenticatedUser = await parent();
  const isAuthenticatedUser = username === authenticatedUser?.login;

  const [profile, organizations, { items: repositories }] = await Promise.all([
    userService.getUserProfile(username),
    isAuthenticatedUser
      ? organizationService.listOrganizationsForAuthenticatedUser()
      : organizationService.listOrganizationsForUser(username),
    repositorySearchService.searchRepositoriesForUser(username, searchQueryParameters),
  ]);
  let organizationMembers: SimpleUser[] | undefined = undefined;
  if (profile.type === ProfileType.Organization) {
    organizationMembers = await organizationService.listOrganizationMembers(profile.login);
  }

  let resetFiltersHref: string | undefined = undefined;
  if (
    !isRepositorySearchQueryParametersEqual(
      searchQueryParameters,
      DEFAULT_REPOSITORY_SEARCH_QUERY_PARAMETERS_REQUIRED
    )
  ) {
    resetFiltersHref = url.pathname;
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
      resetFiltersHref,
    },
  };

  const tabs: PageNavigationTabViewModel[] = [
    {
      label: 'Repositories',
      pageId: PAGE_IDS.PROFILE.REPOSITORIES,
      icon: 'Repo16',
      href: url.pathname,
    },
  ];

  return {
    profile,
    organizations,
    allRepositoriesListViewModel,
    username,
    organizationMembers,
    tabs,
    pageId: PAGE_IDS.PROFILE.REPOSITORIES,
  };
};
