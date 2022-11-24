import {
  AllowedIssuesSearchQueryValues,
  type IssueSearchQueryFilter,
} from '$lib/constants/issues-search-query-filters';

const SEPARATOR = ' ';

const buildRepoFilter = (repoName: string): string => `repo:${repoName}`;

const removeFilterDuplicates = (query: string): string => {
  const filtersObject = query.split(SEPARATOR).reduce((obj, value) => {
    if (value) {
      obj[value] = true;
    }
    return obj;
  }, {} as Record<string, boolean>);
  return Object.keys(filtersObject).join(SEPARATOR);
};

export const buildIssueSearchQuery = (
  filters: IssueSearchQueryFilter[],
  repoName: string
): string => {
  const filtersfull = [...filters, buildRepoFilter(repoName)];
  return filtersfull.join(SEPARATOR);
};

export const parseIssuesSearchQueryAllowed = (
  query: string | null | undefined
): IssueSearchQueryFilter[] | null => {
  return (
    (query
      ?.split(SEPARATOR)
      .filter((x) =>
        AllowedIssuesSearchQueryValues.includes(x as IssueSearchQueryFilter)
      ) as IssueSearchQueryFilter[]) || null
  );
};

export const ensureIssuesSearchQueryFilterValue = (
  query: string | null | undefined,
  replaceValues: IssueSearchQueryFilter[],
  withValue: IssueSearchQueryFilter | null | undefined
): string => {
  const queryNormalized = removeFilterDuplicates(query || String());
  const queryValuesFiltered = queryNormalized
    .split(SEPARATOR)
    .filter((x) => !replaceValues.includes(x as IssueSearchQueryFilter));

  const resultQueryValues = withValue ? [...queryValuesFiltered, withValue] : queryValuesFiltered;

  return resultQueryValues.join(SEPARATOR);
};

export const includesFilter = (
  query: string | null | undefined,
  value: IssueSearchQueryFilter
): boolean => Boolean(query?.includes(value));
