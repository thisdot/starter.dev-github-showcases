export const GITHUB_URL_BASE = process.env.GITHUB_ENDPOINT;

export const DEFAULT_PAGE_SIZE = 30;

const OrderFieldRest: Record<string, string> = {
  /** Order issues by comment count */
  COMMENTS: 'comments',
  /** Order issues by creation time */
  CREATED_AT: 'created',
  /** Order issues by update time */
  UPDATED_AT: 'updated',
};

export type ApiProps = {
  url: string;
  headersOptions: Record<string, string>;
};

export const FetchApi = async ({ url, headersOptions }: ApiProps) => {
  return (
    (await new Promise((resolve, reject) => {
      let fetchObj: {
        headers: Record<string, string>;
      } = {
        headers: {
          ...headersOptions,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
      };
      fetch(url, fetchObj)
        .then((res) => res.json())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    })) || null
  );
};

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
