import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
import { IssuesSearchQuerySort } from '$lib/constants/issues-search-query-filters';

const convertCamelCaseToSentance = (str: string): string =>
  str ? str.replace(/([a-z0-9])([A-Z])/g, '$1 $2') : str;

export const buildIssuesSortFilterDropdownOptions = (): FilterDropdownOption<string>[] => {
  return Object.entries(IssuesSearchQuerySort).map(([key, value]) => ({
    label: convertCamelCaseToSentance(key),
    value,
  }));
};
