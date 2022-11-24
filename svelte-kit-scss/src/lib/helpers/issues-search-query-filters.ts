import type { NavigationFilterOption } from '$lib/components/IssueSearch/IssueSearchControls/models';
import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
import type { IssueSearchQueryFilter } from '$lib/constants/issues-search-query-filters';

const convertCamelCaseToSentance = (str: string): string =>
  str ? str.replace(/([a-z0-9])([A-Z])/g, '$1 $2') : str;

export const buildIssuesNavigationFilterOptions = <TEnum extends IssueSearchQueryFilter>(
  options: Record<string, TEnum>,
  currentQuery: string
): NavigationFilterOption[] => {
  return Object.entries(options).map(([key, value]) => ({
    label: convertCamelCaseToSentance(key),
    href: '/',
    active: value === active,
  }));
};
