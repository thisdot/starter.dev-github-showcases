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

export const TOP_REPOS_URL = `${GITHUB_URL_BASE}/user/repos?sort=updated&affiliation=owner,collaborator,organization_member&per_page=20`;
export const SINGLE_USER_REPO = (user: string, repo: string) =>
  `${GITHUB_URL_BASE}/repos/${user}/${repo}`;
