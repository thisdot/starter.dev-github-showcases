import type { HtmlSentenceNode } from '$lib/components/shared/HtmlSentence/view-models';
import { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';
import type {
  RepositoryPageSearchQueryParameters,
  RepositorySearchQueryParameters,
} from '$lib/interfaces';

export const extractRepositoryPageSearchQueryParameters = (
  url: URL
): RepositoryPageSearchQueryParameters => {
  const pageQuery = Object.fromEntries(url.searchParams);
  const params = (({ language, q, sort, type }) => ({ language, q, sort, type }))(pageQuery);
  return params;
};

export const DEFAULT_REPOSITORY_SEARCH_QUERY_PARAMETERS_REQUIRED: RepositorySearchQueryParameters =
  {
    sort: RepositorySearchSort.LastUpdated,
  };

export const remapRepositorySearchQueryParameters = (
  pageParams: RepositoryPageSearchQueryParameters,
  requiredDefaults = DEFAULT_REPOSITORY_SEARCH_QUERY_PARAMETERS_REQUIRED
): RepositorySearchQueryParameters => {
  const params: RepositorySearchQueryParameters = {
    language: pageParams.language,
    sort: Object.values(RepositorySearchSort).find((x) => x === pageParams.sort?.toLowerCase()),
    term: pageParams.q,
    type: Object.values(RepositorySearchType).find((x) => x === pageParams.type?.toLowerCase()),
  };

  return Object.keys(requiredDefaults)
    .map((x) => x as keyof RepositorySearchQueryParameters)
    .reduce((result, key) => ({ ...result, [key]: result[key] || requiredDefaults[key] }), params);
};

export const composeRepositorySearchQueryParameters = <
  TParamName extends keyof RepositorySearchQueryParameters,
  TValue extends RepositorySearchQueryParameters[TParamName]
>(
  baseParams: RepositorySearchQueryParameters,
  paramName: TParamName,
  value: TValue
): RepositorySearchQueryParameters => ({ ...baseParams, [paramName]: value });

export const isRepositorySearchQueryParametersEqual = (
  params1: RepositorySearchQueryParameters,
  params2: RepositorySearchQueryParameters
): boolean => {
  const keysUnion = <(keyof RepositorySearchQueryParameters)[]>(
    Object.keys({ ...params1, ...params2 })
  );
  return !keysUnion.find((key) => (params1[key] || undefined) !== (params2[key] || undefined));
};

export const buildURLSearchParamsForParameters = (
  params: RepositorySearchQueryParameters
): URLSearchParams => {
  const isDefault = isRepositorySearchQueryParametersEqual(
    params,
    DEFAULT_REPOSITORY_SEARCH_QUERY_PARAMETERS_REQUIRED
  );
  const urlSearchParams = new URLSearchParams();
  if (!isDefault) {
    urlSearchParams.append('language', params.language || '');
    urlSearchParams.append('q', params.term || '');
    urlSearchParams.append('sort', params.sort || '');
    urlSearchParams.append('type', params.type || '');
  }
  return urlSearchParams;
};

export const buildRepositoryPageHrefForParameter = <
  TParamName extends keyof RepositorySearchQueryParameters,
  TValue extends RepositorySearchQueryParameters[TParamName]
>(
  currentPageUrl: URL,
  searchQueryParameters: RepositorySearchQueryParameters,
  paramName: TParamName,
  value: TValue
) => {
  const { pathname } = currentPageUrl;
  const params = composeRepositorySearchQueryParameters(searchQueryParameters, paramName, value);
  const urlSearchParamsString = buildURLSearchParamsForParameters(params).toString();
  const hrefSearch = urlSearchParamsString ? `?${urlSearchParamsString}` : '';
  return `${pathname}${hrefSearch}`;
};

export const buildRepositoryPageNavigationFilterOptions = <
  TParamName extends keyof RepositorySearchQueryParameters,
  TValue extends RepositorySearchQueryParameters[TParamName]
>(
  currentPageUrl: URL,
  searchQueryParameters: RepositorySearchQueryParameters,
  paramName: TParamName,
  valueLabelMap: Map<TValue, string>
) => {
  return Array.from(valueLabelMap).map(([value, label]) => {
    const params = composeRepositorySearchQueryParameters(searchQueryParameters, paramName, value);
    return {
      active: isRepositorySearchQueryParametersEqual(searchQueryParameters, params),
      href: buildRepositoryPageHrefForParameter(
        currentPageUrl,
        searchQueryParameters,
        paramName,
        value
      ),
      label,
    };
  });
};

export const composeRepositoryFiltersStateSentence = (
  { sort, term, type }: RepositorySearchQueryParameters,
  resultsCount: number
): HtmlSentenceNode[] => {
  const resultCountNodes: HtmlSentenceNode[] = [
    {
      text: String(resultsCount),
      emphasis: true,
    },
    {
      text: 'results for',
    },
  ];

  let typeText: string;
  switch (type) {
    case RepositorySearchType.Archived:
    case RepositorySearchType.Public:
    case RepositorySearchType.Private:
      typeText = type;
      break;
    case RepositorySearchType.Sources:
    case RepositorySearchType.Mirrors:
    case RepositorySearchType.Templates:
      typeText = type.slice(0, -1);
      break;
    case RepositorySearchType.Forks:
      typeText = 'forked';
      break;
    default:
      typeText = 'all';
  }

  const typeNodes: HtmlSentenceNode[] = [
    {
      text: typeText,
      emphasis: true,
    },
    {
      text: 'repositories',
    },
  ];

  const termNodes: HtmlSentenceNode[] = term
    ? [
        {
          text: 'matching',
        },
        {
          text: term,
          emphasis: true,
        },
      ]
    : [];

  let sortedByText: string;
  switch (sort) {
    case RepositorySearchSort.Name:
    case RepositorySearchSort.Stars: {
      sortedByText = sort;
      break;
    }
    default:
      sortedByText = 'last updated';
  }
  const sortedByNodes = [
    {
      text: 'sorted by',
    },
    {
      text: sortedByText,
      emphasis: true,
    },
  ];
  return [...resultCountNodes, ...typeNodes, ...termNodes, ...sortedByNodes];
};
