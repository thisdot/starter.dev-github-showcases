import {
  RepositorySearchSort,
  RepositorySearchType,
  type RepositorySearchQueryParameters,
} from '$lib/services';

export type RepositoryPageSearchQueryParameters = {
  language?: string;
  q?: string;
  sort?: string;
  type?: string;
};

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
