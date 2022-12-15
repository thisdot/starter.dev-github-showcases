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
  const merged12 = { ...params1, ...params2 };
  const paramIncludes12 = !Object.keys(merged12)
    .map((key) => key as keyof RepositorySearchQueryParameters)
    .find((key) => merged12[key] !== params1[key]);
  const merged21 = { ...params2, ...params1 };
  const paramIncludes21 = !Object.keys(merged21)
    .map((key) => key as keyof RepositorySearchQueryParameters)
    .find((key) => merged21[key] !== params2[key]);
  return paramIncludes12 && paramIncludes21;
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

export const buildRepositoryPageNavigationFilterOptions = <
  TParamName extends keyof RepositorySearchQueryParameters,
  TValue extends RepositorySearchQueryParameters[TParamName]
>(
  paramName: TParamName,
  valueLabelMap: Map<TValue, string>,
  currentPageUrl: URL,
  searchQueryParameters: RepositorySearchQueryParameters
) => {
  const { pathname } = currentPageUrl;
  return Array.from(valueLabelMap).map(([value, label]) => {
    const params = composeRepositorySearchQueryParameters(searchQueryParameters, paramName, value);
    const urlSearchParamsString = buildURLSearchParamsForParameters(params).toString();
    const hrefSearch = urlSearchParamsString ? `?${urlSearchParamsString}` : '';
    const href = `${pathname}${hrefSearch}`;
    return {
      active: isRepositorySearchQueryParametersEqual(searchQueryParameters, params),
      href,
      label,
    };
  });
};
