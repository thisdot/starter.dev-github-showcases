import type { PageServerLoad, PageServerLoadEvent } from './$types';
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
import type { NavigationFilterOption } from '$lib/components/shared/models/navigation-filter-option';
import { redirect } from '@sveltejs/kit';

const DEFAULT_PER_PAGE = 25;
const PAGE_SEARCH_PARAM_QUERY = 'q';
const PAGE_SEARCH_PARAM_PAGE = 'page';

const buildNavigationFilterOptions = <TParameter extends string>(
  currentUrlHref: string,
  queryBase: string,
  labelParameterDictionary: Record<string, TParameter>,
  decorateLabelFn?: (label: string, parameter: TParameter) => string,
  optional?: boolean
): NavigationFilterOption[] => {
  return Object.entries(labelParameterDictionary).map(([label, queryParameter]) => {
    const url = new URL(currentUrlHref);
    const query = estimateSearchQueryForParameter(queryBase, queryParameter);
    const active = splitFilterParameters(queryBase).includes(queryParameter);
    if (optional && active) {
      const deactivateQuery = splitFilterParameters(queryBase)
        .filter((x) => x !== queryParameter)
        .join(' ');
      url.searchParams.set(PAGE_SEARCH_PARAM_QUERY, deactivateQuery);
    } else {
      url.searchParams.set(PAGE_SEARCH_PARAM_QUERY, query);
    }
    return {
      label: decorateLabelFn ? decorateLabelFn(label, queryParameter) : label,
      href: url.toString(),
      active,
    } as NavigationFilterOption;
  });
};

const redirectIfRequired = ({
  params,
  url: { searchParams, pathname, search },
}: PageServerLoadEvent): void => {
  const query = searchParams.get(PAGE_SEARCH_PARAM_QUERY);
  if (!query) {
    return;
  }
  const issueSearchPageType = params.issueSearchType as keyof typeof IssueSearchPageTypeFiltersMap;

  const requiredParameter = IssueSearchPageTypeFiltersMap[issueSearchPageType];
  const queryParameters = splitFilterParameters(query);
  if (query && !queryParameters.includes(requiredParameter)) {
    const pageType = Object.entries(IssueSearchPageTypeFiltersMap)
      .find(([, param]) => queryParameters.includes(param))
      ?.at(0);
    const targetPathname = [...pathname.split('/').slice(0, -1), pageType].join('/');
    throw redirect(302, `${targetPathname}${search}`);
  }
};

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
  redirectIfRequired(event);
  const {
    fetch,
    params,
    url: { searchParams, href },
  } = event;

  const service = new IssuesSearchService(fetch);
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

  const issuesPromise = service.getIssues(requestSearchQuery, {
    page: currentPage,
    perPage: DEFAULT_PER_PAGE,
  });

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
    labelParameterDictionaryMilestones,
    (label) => label,
    true
  );

  return {
    issues,
    sortFilters,
    stateFilters,
    milestoneFilters,
  };
};
