import { IssueSearchPageTypeFiltersMap } from '$lib/constants/matchers';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param: string): boolean => {
  return Object.keys(IssueSearchPageTypeFiltersMap).includes(param?.toLowerCase());
};
