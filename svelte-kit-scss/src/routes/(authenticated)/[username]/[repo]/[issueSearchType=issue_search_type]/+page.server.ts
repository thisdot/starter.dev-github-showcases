import type { PageServerLoad, PageServerLoadEvent } from './$types';
import {
  IssueSearchQueryState,
  IssuesSearchQuerySort,
} from '$lib/constants/issues-search-query-filters';

import { IssueLabelService, IssueMilestoneService, IssuesSearchService } from '$lib/services';
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
import { PAGE_IDS } from '$lib/constants/page-ids';
import type { PaginationViewModel } from '$lib/components/shared/Pagination/view-models';
import { buildPageUrl } from '$lib/helpers';

const DEFAULT_PER_PAGE = 25;
const PAGE_SEARCH_PARAM_QUERY = 'q';
const PAGE_SEARCH_PARAM_PAGE = 'page';

const buildNavigationFilterOptions = <TParameter extends string>(
  currentUrlHref: string,
  queryBase: string,
  labelParameterDictionary: Record<string, TParameter>,
  decorateLabelFn?: (label: string, parameter: TParameter) => string,
  optional?: boolean,
  extrasBuilderFn?: (label: string, parameter: TParameter) => Record<string, unknown> | undefined
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
      extras: extrasBuilderFn ? extrasBuilderFn(label, queryParameter) : undefined,
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
    params: { username, repo, issueSearchType },
    url: { searchParams, href },
  } = event;

  const service = new IssuesSearchService(fetch);
  const milestoneService = new IssueMilestoneService(fetch);
  const issueLabelService = new IssueLabelService(fetch);

  const defaultSearchQuery = [
    IssueSearchPageTypeFiltersMap[issueSearchType as IssueSearchTypePage],
    IssueSearchQueryState.Open,
    IssuesSearchQuerySort.Newest,
  ].join(' ');

  const currentSearchQuery = searchParams.get(PAGE_SEARCH_PARAM_QUERY);
  const currentPageString = searchParams.get(PAGE_SEARCH_PARAM_PAGE);
  const currentPage = currentPageString ? Number(currentPageString) : 1;

  const searchQuery = currentSearchQuery || defaultSearchQuery;

  const pageDefaultRepo = `${username}/${repo}`;
  const requestSearchQuery = ensureRepoParameter(searchQuery, pageDefaultRepo);

  const issuesCollectionPromise = service.getIssuesCollection(requestSearchQuery, {
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

  const issueLabelsPromise = issueLabelService.getLabelsForRepository(username, repo);

  const [issuesCollection, openIssuesCount, closedIssuesCount, openMilestones, issueLabels] =
    await Promise.all([
      issuesCollectionPromise,
      openIssuesCountPromise,
      closedIssuesCountPromise,
      openMilestonesPromise,
      issueLabelsPromise,
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

  //filter: Milestone
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

  //filtering: Label
  const labelParameterDictionaryIssueLabels = issueLabels.reduce((dict, x) => {
    dict[x.name] = buildFilterParameter(SEARCH_QUERY_PARAMETER_QUALIFIER.LABEL, `"${x.name}"`);
    return dict;
  }, {} as Record<string, string>);
  const labelFilters = buildNavigationFilterOptions(
    href,
    searchQuery,
    labelParameterDictionaryIssueLabels,
    (label) => label,
    true,
    (label) => {
      const issueLabel = issueLabels.find((x) => x.name === label);
      return issueLabel;
    }
  );

  // pagination
  const totalPagesCount = Math.ceil(issuesCollection.totalCount / DEFAULT_PER_PAGE);
  const canNavigateNext = currentPage < totalPagesCount;
  const pagesHrefsEntries = [...Array(totalPagesCount).keys()]
    .map((index) => ++index)
    .map((pageNumber) => [pageNumber, buildPageUrl(event.url, pageNumber).href]);
  const pagination: PaginationViewModel = {
    previousPageHref: currentPage > 1 ? buildPageUrl(event.url, currentPage - 1).href : undefined,
    nextPageHref: canNavigateNext ? buildPageUrl(event.url, currentPage + 1).href : undefined,
    pagesHrefs: Object.fromEntries(pagesHrefsEntries),
    currentPage,
  };
  return {
    issues: issuesCollection.items,
    sortFilters,
    stateFilters,
    milestoneFilters,
    labelFilters,
    pageId: issueSearchType === 'issues' ? PAGE_IDS.REPOSITORY.ISSUES : PAGE_IDS.REPOSITORY.PULLS,
    pagination,
  };
};
