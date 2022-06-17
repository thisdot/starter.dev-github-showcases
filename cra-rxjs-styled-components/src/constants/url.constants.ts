export const API_URL_BASE = process.env.REACT_APP_API_URL;
export const APP_BASE_URL = process.env.REACT_APP_BASE_URL;
export const GITHUB_URL_BASE = `https://api.github.com`;

export const REDIRECT_URL = `${APP_BASE_URL}/redirect`;

export const SIGN_IN_BASE_URL = `${API_URL_BASE}/auth/signin`;

export const SIGN_IN_URL = (() => {
  const url = new URL(SIGN_IN_BASE_URL);
  url.searchParams.set('redirect_url', REDIRECT_URL);
  return url.toString();
})();

export const SIGN_OUT_URL = `${API_URL_BASE}/auth/signout`;
export const GET_TOKEN_URL = `${API_URL_BASE}/auth/token`;

export const REPOS_URL = (page: string = '1') =>
  `${GITHUB_URL_BASE}/user/repos?sort=updated&affiliation=owner,collaborator&page=${page}`;

export const SINGLE_USER_REPO = (user: string, repo: string) =>
  `${GITHUB_URL_BASE}/repos/${user}/${repo}`;

export const ORG_REPO_LIST = (user: string) =>
  `${GITHUB_URL_BASE}/orgs/${user}/repos?sort=updated&per_page=10`;

export const USER_REPO_LIST = (user: string) =>
  `${GITHUB_URL_BASE}/users/${user}/repos?sort=updated&per_page=10`;

export const GISTS_URL = (user: string) =>
  `${GITHUB_URL_BASE}/users/${user}/gists?per_page=10`;
