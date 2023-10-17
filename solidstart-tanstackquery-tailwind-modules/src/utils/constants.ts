export const API_URL = import.meta.env.VITE_API_URL;
export const APP_BASE_URL = import.meta.env.VITE_BASE_URL;
export const GITHUB_URL_BASE = import.meta.env.VITE_GITHUB_URL;

export const REDIRECT_URL = `${APP_BASE_URL}/redirect`;

export const SIGN_IN_BASE_URL = `${API_URL}/auth/signin`;
export const SIGN_OUT_URL = `${API_URL}/auth/signout`;

export const GITHUB_GRAPHQL = `${GITHUB_URL_BASE}/graphql`;

export const OrderField = {
  /** Order issues by comment count */
  Comments: 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt: 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt: 'UPDATED_AT',
};

const OrderFieldRest: Record<string, string> = {
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

export type State = 'open' | 'closed';

export function convertObjectToQueryString(object: Record<string, string>) {
  return new URLSearchParams(object).toString();
}

export function replaceSpaceWithPlus(str: string) {
  return str.split(' ').join('+');
}

export const replaceEncodedSpaceWithPlus = (str: string) => {
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
}) => {
  const params = {
    per_page: first,
    sort: OrderFieldRest[sort || 'CREATED_AT'],
    order: direction?.toLowerCase() || 'asc',
  };
  //@ts-ignore
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

export const REPO_LABELS = ({ user, repo }: { user: string; repo: string }) =>
  `${GITHUB_URL_BASE}/repos/${user}/${repo}/labels`;

export const REPO_MILESTONES = ({
  user,
  repo,
}: {
  user: string;
  repo: string;
}) => `${GITHUB_URL_BASE}/repos/${user}/${repo}/milestones`;
