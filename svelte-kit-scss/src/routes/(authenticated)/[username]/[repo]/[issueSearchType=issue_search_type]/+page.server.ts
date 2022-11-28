import type { PageServerLoad } from './$types';
import {
  IssueSearchQueryState,
  IssuesSearchQuerySort,
} from '$lib/constants/issues-search-query-filters';

import { IssueMilestoneService, IssuesSearchService } from '$lib/services';
import { IssueSearchPageTypeFiltersMap, type IssueSearchTypePage } from '$lib/constants/matchers';
import {
  buildFilterParameter,
  ensureRepoParameter,
  estimateSearchQueryForParameter,
  SEARCH_QUERY_PARAMETER_QUALIFIER,
  splitFilterParameters,
} from '$lib/helpers/issues-search-query-builder';
import type { NavigationFilterOption } from '$lib/components/IssueSearch/IssueSearchControls/models';

const DEFAULT_PER_PAGE = 25;
const PAGE_SEARCH_PARAM_QUERY = 'q';
const PAGE_SEARCH_PARAM_PAGE = 'page';

const buildNavigationFilterOptions = <TParameter extends string>(
  currentUrlHref: string,
  queryBase: string,
  labelParameterDictionary: Record<string, TParameter>,
  decorateLabelFn?: (label: string, parameter: TParameter) => string
): NavigationFilterOption[] => {
  return Object.entries(labelParameterDictionary).map(([label, queryParameter]) => {
    const url = new URL(currentUrlHref);
    const query = estimateSearchQueryForParameter(queryBase, queryParameter);
    url.searchParams.set(PAGE_SEARCH_PARAM_QUERY, query);
    return {
      label: decorateLabelFn ? decorateLabelFn(label, queryParameter) : label,
      href: url.toString(),
      active: splitFilterParameters(queryBase).includes(queryParameter),
    } as NavigationFilterOption;
  });
};

export const load: PageServerLoad = async ({ fetch, params, url: { searchParams, href } }) => {
  const service = new IssuesSearchService(fetch, DEFAULT_PER_PAGE);
  const milestoneService = new IssueMilestoneService(fetch);
  const { username, repo, issueSearchType } = params;

  const defaultSearchQuery = [
    IssueSearchPageTypeFiltersMap[issueSearchType as IssueSearchTypePage],
    IssueSearchQueryState.Open,
    IssuesSearchQuerySort.Newest,
  ].join(' ');

  const currentSearchQuery = searchParams.get(PAGE_SEARCH_PARAM_QUERY);
  const currentPageString = searchParams.get(PAGE_SEARCH_PARAM_PAGE);
  const currentPage = currentPageString ? Number(currentPageString) : null;

  const searchQuery = currentSearchQuery || defaultSearchQuery;

  const pageDefaultRepo = `${username}/${repo}`;
  const requestSearchQuery = ensureRepoParameter(searchQuery, pageDefaultRepo);

  const issuesPromise = service.getIssues(requestSearchQuery, { page: currentPage });

  const searchQueryOpen = estimateSearchQueryForParameter(
    requestSearchQuery,
    IssueSearchQueryState.Open
  );
  const openIssuesCountPromise = service.getIssuesCount(searchQueryOpen);

  const searchQueryClosed = estimateSearchQueryForParameter(
    requestSearchQuery,
    IssueSearchQueryState.Closed
  );
  const closedIssuesCountPromise = service.getIssuesCount(searchQueryClosed);

  const openMilestonesPromise = milestoneService.getOpenMilestones(username, repo);

  const [issues, openIssuesCount, closedIssuesCount, openMilestones] = await Promise.all([
    issuesPromise,
    openIssuesCountPromise,
    closedIssuesCountPromise,
    openMilestonesPromise,
  ]);

  const sortFilters = buildNavigationFilterOptions(href, searchQuery, IssuesSearchQuerySort);
  const stateFilters = buildNavigationFilterOptions(
    href,
    searchQuery,
    IssueSearchQueryState,
    (label, parameter) => {
      const parts = [];
      switch (parameter) {
        case IssueSearchQueryState.Open:
          parts.push(openIssuesCount);
          break;
        case IssueSearchQueryState.Closed:
          parts.push(closedIssuesCount);
          break;
      }
      parts.push(label);
      return parts.join(' ');
    }
  );

  const labelParameterDictionaryMilestones = openMilestones.reduce((dict, x) => {
    dict[x.title] = buildFilterParameter(
      SEARCH_QUERY_PARAMETER_QUALIFIER.MILESTONE,
      `"${x.title}"`
    );
    return dict;
  }, {} as Record<string, string>);
  const milestoneFilters = buildNavigationFilterOptions(
    href,
    searchQuery,
    labelParameterDictionaryMilestones
  );
  console.log(labelParameterDictionaryMilestones);
  return {
    issues,
    sortFilters,
    stateFilters,
    milestoneFilters,
  };
};
