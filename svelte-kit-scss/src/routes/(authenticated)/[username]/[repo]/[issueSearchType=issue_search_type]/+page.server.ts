import type { PageServerLoad } from './$types';
import {
  IssueSearchQueryState,
  IssuesSearchQuerySort,
} from '$lib/constants/issues-search-query-filters';

import { IssuesSearchService } from '$lib/services';
import { IssueSearchPageTypeFiltersMap, type IssueSearchTypePage } from '$lib/constants/matchers';
import {
  buildFilterParameter,
  estimateSearchQueryForParameter,
  SEARCH_QUERY_PARAMETER_QUALIFIER,
  splitFilterParameters,
} from '$lib/helpers/issues-search-query-builder';
import type { NavigationFilterOption } from '$lib/components/IssueSearch/IssueSearchControls/models';

const DEFAULT_PER_PAGE = 25;
const PAGE_SEARCH_PARAM_QUERY = 'q';
const PAGE_SEARCH_PARAM_PAGE = 'page';

export const load: PageServerLoad = async ({ fetch, params, url: { searchParams, href } }) => {
  const service = new IssuesSearchService(fetch, DEFAULT_PER_PAGE);
  const { username, repo, issueSearchType } = params;

  const defaultSearchQuery = [
    IssueSearchPageTypeFiltersMap[issueSearchType as IssueSearchTypePage],
    IssueSearchQueryState.Open,
    IssuesSearchQuerySort.Newest,
    buildFilterParameter(SEARCH_QUERY_PARAMETER_QUALIFIER.REPO, `${username}/${repo}`),
  ].join(' ');

  const currentSearchQuery = searchParams.get(PAGE_SEARCH_PARAM_QUERY);
  const currentPageString = searchParams.get(PAGE_SEARCH_PARAM_PAGE);
  const currentPage = currentPageString ? Number(currentPageString) : null;

  const searchQuery = currentSearchQuery || defaultSearchQuery;

  const issuesPromise = service.getIssues(searchQuery, { page: currentPage });

  const searchQueryOpen = estimateSearchQueryForParameter(searchQuery, IssueSearchQueryState.Open);
  const openIssuesCountPromise = service.getIssuesCount(searchQueryOpen);

  const searchQueryClosed = estimateSearchQueryForParameter(
    searchQuery,
    IssueSearchQueryState.Closed
  );
  const closedIssuesCountPromise = service.getIssuesCount(searchQueryClosed);

  const [issues, openIssuesCount, closedIssuesCount] = await Promise.all([
    issuesPromise,
    openIssuesCountPromise,
    closedIssuesCountPromise,
  ]);

  const sortFilters = Object.entries(IssuesSearchQuerySort).map(([label, queryParameter]) => {
    const url = new URL(href);
    const query = estimateSearchQueryForParameter(searchQuery, queryParameter);
    url.searchParams.set(PAGE_SEARCH_PARAM_QUERY, query);

    return {
      label,
      href: url.toString(),
      active: splitFilterParameters(searchQuery).includes(queryParameter),
    } as NavigationFilterOption;
  });

  return {
    issues,
    openIssuesCount,
    closedIssuesCount,
    sortFilters,
  };
};
