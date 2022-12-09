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

// export const REPOS_URL = (page: string = '1') =>
//   `${GITHUB_URL_BASE}/user/repos?sort=pushed&affiliation=owner,collaborator&page=${page}`;
export const REPOS_URL = `${GITHUB_URL_BASE}/user/repos`;

// export const SINGLE_USER_REPO = (user: string, repo: string) => `${GITHUB_URL_BASE}/repos/${user}/${repo}`;

// export const ORG_REPO_LIST = (user: string) => `${GITHUB_URL_BASE}/orgs/${user}/repos?sort=pushed&per_page=10`;

// export const USER_REPO_LIST = (user: string, page: string = '1') =>
//   `${GITHUB_URL_BASE}/users/${user}/repos?sort=pushed&page=${page}&type=all`;

// export const GISTS_URL = (user: string) => `${GITHUB_URL_BASE}/users/${user}/gists?per_page=10`;

// export const PULLS_URL = (owner: string, repoName: string) =>
//   `${GITHUB_URL_BASE}/repos/${owner}/${repoName}/pulls?state=all`;

// export const ISSUE_PR_SEARCH = (
//   user: string,
//   repo: string,
//   type: IssueType,
//   state: State,
//   per_page: number,
//   page: number
// ) =>
//   `${GITHUB_URL_BASE}/search/issues?q=repo:${user}/${repo}%20is:${type}%20state:${state}&per_page=${per_page}&page=${page}`;


// export const SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX = /%E2%80%A4/g;
