import type { PageServerLoad } from './$types';
import {
  IssueSearchQueryState,
  IssuesSearchQuerySort,
  type IssueSearchQueryFilter,
} from '$lib/constants/issues-search-query-filters';
import {
  buildIssueSearchQuery,
  ensureIssuesSearchQueryFilterValue,
  parseIssuesSearchQueryAllowed,
} from '$lib/helpers/issues-search-query-builder';
import { IssuesSearchService } from '$lib/services';
import { IssueSearchPageTypeFiltersMap, type IssueSearchTypePage } from '$lib/constants/matchers';

const DEFAULT_PER_PAGE = 25;
const PAGE_SEARCH_PARAM_QUERY = 'q';
const PAGE_SEARCH_PARAM_PAGE = 'page';

export const load: PageServerLoad = async ({ fetch, params, url: { searchParams } }) => {
  const service = new IssuesSearchService(fetch, DEFAULT_PER_PAGE);
  const { username, repo, issueSearchType } = params;

  const defaultFilters: IssueSearchQueryFilter[] = [
    IssueSearchPageTypeFiltersMap[issueSearchType as IssueSearchTypePage],
    IssueSearchQueryState.Open,
    IssuesSearchQuerySort.Newest,
  ];

  const currentSearchQuery = searchParams.get(PAGE_SEARCH_PARAM_QUERY);
  const currentPageString = searchParams.get(PAGE_SEARCH_PARAM_PAGE);
  const currentPage = currentPageString ? Number(currentPageString) : null;

  const allowedSearchQueryFilters =
    parseIssuesSearchQueryAllowed(currentSearchQuery) || defaultFilters;
  const searchQuery = buildIssueSearchQuery(allowedSearchQueryFilters, `${username}/${repo}`);

  const issues = await service.getIssues(searchQuery, { page: currentPage });

  const searchQueryOpen = ensureIssuesSearchQueryFilterValue(
    searchQuery,
    Object.values(IssueSearchQueryState),
    IssueSearchQueryState.Open
  );
  const openIssuesCount = await service.getIssuesCount(searchQueryOpen);

  const searchQueryClosed = ensureIssuesSearchQueryFilterValue(
    searchQuery,
    Object.values(IssueSearchQueryState),
    IssueSearchQueryState.Open
  );
  const closedIssuesCount = await service.getIssuesCount(searchQueryClosed);

  return {
    issues,
    openIssuesCount,
    closedIssuesCount,
  };
};
