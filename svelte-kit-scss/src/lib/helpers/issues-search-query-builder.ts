import { PREDEFINED_SEARCH_QUERY_PARAMETER_GROUPS } from '$lib/constants/issues-search-query-filters';

const PARAMETER_SEPARATOR = ' ';
const QUALIFIER_SEPARATOR = ':';

export const SEARCH_QUERY_PARAMETER_QUALIFIER = {
  IS: 'is',
  REPO: 'repo',
  MILESTONE: 'milestone',
  SORT: 'sort',
  LABEL: 'label',
} as const;

type SearchQueryParameterQualifier =
  typeof SEARCH_QUERY_PARAMETER_QUALIFIER[keyof typeof SEARCH_QUERY_PARAMETER_QUALIFIER];

export const buildFilterParameter = (qualifier: SearchQueryParameterQualifier, value: string) =>
  [qualifier, value].join(QUALIFIER_SEPARATOR);

export const splitFilterParameters = (query: string): string[] => {
  return query.split(PARAMETER_SEPARATOR).reduce((arr, x) => {
    if (x.includes(QUALIFIER_SEPARATOR)) {
      arr.push(x);
    } else {
      const arrLastIndex = arr.length - 1;
      arr[arrLastIndex] = [arr[arrLastIndex], x].join(PARAMETER_SEPARATOR);
    }
    return arr;
  }, [] as string[]);
};

export const ensureRepoParameter = (query: string, repoName: string): string => {
  const repoParam = splitFilterParameters(query).find((x) =>
    x.startsWith(SEARCH_QUERY_PARAMETER_QUALIFIER.REPO)
  );
  return repoParam
    ? query
    : [query, buildFilterParameter(SEARCH_QUERY_PARAMETER_QUALIFIER.REPO, repoName)].join(
        PARAMETER_SEPARATOR
      );
};

export const estimateSearchQueryForParameter = (baseQuery: string, parameter: string) => {
  // validate parameter
  const [qualifier, value] = parameter.split(QUALIFIER_SEPARATOR);
  if (!(qualifier && value)) {
    throw new Error(`Invalid Search Query parameter: ${parameter}`);
  }

  const predefinedGroup = PREDEFINED_SEARCH_QUERY_PARAMETER_GROUPS.find((x) =>
    x.includes(parameter)
  );

  const parametersFiltered = predefinedGroup
    ? splitFilterParameters(baseQuery).filter((x) => !predefinedGroup.includes(x))
    : splitFilterParameters(baseQuery).filter(
        (x) => !x.startsWith(qualifier + QUALIFIER_SEPARATOR)
      );

  return parametersFiltered.concat([parameter]).join(PARAMETER_SEPARATOR);
};
