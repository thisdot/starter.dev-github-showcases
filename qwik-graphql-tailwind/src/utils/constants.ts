export const API_URL_BASE = import.meta.env.VITE_API_URL;
export const APP_BASE_URL = import.meta.env.VITE_BASE_URL;
export const GITHUB_URL_BASE = import.meta.env.VITE_GITHUB_URL;

export const REDIRECT_URL = `${APP_BASE_URL}/auth/redirect`;

export const SIGN_IN_BASE_URL = `${API_URL_BASE}/auth/signin`;

export const GITHUB_GRAPHQL = `${GITHUB_URL_BASE}/graphql`;

export const SIGN_IN_URL = (() => {
  const url = new URL(SIGN_IN_BASE_URL);
  url.searchParams.set('redirect_url', REDIRECT_URL);
  return url.toString();
})();

export const SIGN_OUT_URL = `${API_URL_BASE}/auth/signout`;
export const GET_TOKEN_URL = `${API_URL_BASE}/auth/token`;

export const AUTH_TOKEN = 'token';

export const DEFAULT_PAGE_SIZE = 30;

const OrderFieldRest: Record<string, string> = {
  /** Order issues by comment count */
  COMMENTS: 'comments',
  /** Order issues by creation time */
  CREATED_AT: 'created',
  /** Order issues by update time */
  UPDATED_AT: 'updated',
};

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
    per_page: first?.toString() || DEFAULT_PAGE_SIZE.toString(),
    sort: OrderFieldRest[sort || 'CREATED_AT'],
    order: direction?.toLowerCase() || 'asc',
  };
  const queryStrings = convertObjectToQueryString(params);
  const milestone_check = `+milestone:"${
    typeof milestone === 'string' ? replaceEncodedSpaceWithPlus(encodeURIComponent(milestone)) : milestone
  }"`;
  const Q = `+is:${state}+is:${type}${labels ? `+label:"${replaceSpaceWithPlus(labels)}"` : ''}${
    milestone ? milestone_check : ''
  }`;
  return `${GITHUB_URL_BASE}/search/issues?q=repo:${owner}/${name}${Q}&${queryStrings}`;
};
