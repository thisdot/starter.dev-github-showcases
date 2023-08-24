import countCalc from './countCalc';

export { useApi } from './useApi';
export { countCalc };
export { modifyFilterTypeText } from './modifyFilterTypeText';
export { inArray } from './inArray';
export { getTime } from './getTime';
export { matchText } from './matchText';
export { parseLabels, parseMilestones } from './parseFunctions';
export * from './api';

export const GITHUB_URL_BASE = process.env.VUE_APP_URL;

export const OrderField = {
  /** Order issues by comment count */
  Comments: 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt: 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt: 'UPDATED_AT',
};

export const OrderFieldRest = {
  /** Order issues by comment count */
  COMMENTS: 'comments',
  /** Order issues by creation time */
  CREATED_AT: 'created',
  /** Order issues by update time */
  UPDATED_AT: 'updated',
};

export const OrderDirection = {
  Asc: 'ASC',
  Desc: 'DESC',
};

export const SORT_OPTIONS = {
  [`${OrderField.CreatedAt}^${OrderDirection.Desc}`]: 'Newest',
  [`${OrderField.CreatedAt}^${OrderDirection.Asc}`]: 'Oldest',
  [`${OrderField.Comments}^${OrderDirection.Desc}`]: 'Most commented',
  [`${OrderField.Comments}^${OrderDirection.Asc}`]: 'Least commented',
  [`${OrderField.UpdatedAt}^${OrderDirection.Desc}`]: 'Recently updated',
  [`${OrderField.UpdatedAt}^${OrderDirection.Asc}`]: 'Least recently updated',
};

export const DEFAULT_PAGE_SIZE = 30;

export const parseSortParams = (
  options: Record<string, string>,
  value: string,
  position: number,
): string =>
  Object.keys(options)
    .find((key) => options[key] === value)
    ?.split('^')[position];

export const getSelectedMilestoneNumber = (
  milestoneOptions: { number: number; title: string }[],
  selectedMilestone: string | undefined,
): string | undefined =>
  selectedMilestone
    ? milestoneOptions
        .filter((mo) => mo.title === selectedMilestone)[0]
        .number.toString()
    : undefined;

export function convertObjectToQueryString(
  object: Record<string, any>,
): string {
  return new URLSearchParams(object).toString();
}

export function replaceSpaceWithPlus(str: string): string {
  return str.split(' ').join('+');
}

export const replaceEncodedSpaceWithPlus = (str: string): string => {
  return str.split(encodeURIComponent(' ')).join('+');
};

export const SEARCH_PULLS = ({
  owner,
  name,
  first,
  sort,
  direction,
  labels,
  type,
  milestone,
  state,
}: {
  owner: string;
  name: string;
  type: string;
  first?: number;
  sort?: string;
  labels?: string;
  direction?: string;
  milestone?: string | number;
  state: 'open' | 'closed';
}): string => {
  const params = {
    per_page: first,
    sort: OrderFieldRest[sort || 'CREATED_AT'],
    order: direction?.toLowerCase() || 'asc',
  };
  const queryStrings = convertObjectToQueryString(params);
  const milestone_check = `+milestone:"${
    typeof milestone === 'string'
      ? replaceEncodedSpaceWithPlus(encodeURIComponent(milestone))
      : milestone
  }"`;
  const Q = `+is:${state}+is:${type}${
    labels ? `+label:"${replaceSpaceWithPlus(labels)}"` : ''
  }${milestone ? milestone_check : ''}`;
  return `${GITHUB_URL_BASE}/search/issues?q=repo:${owner}/${name}${Q}&${queryStrings}`;
};
