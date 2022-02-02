export const API_URL_BASE = process.env.REACT_APP_GITHUB_MIDDLEWARE_URL;
export const GITHUB_URL_BASE = `https://api.github.com`;

export const SIGN_IN_URL = `${API_URL_BASE}/auth/signin`;
export const SIGN_OUT_URL = `${API_URL_BASE}/auth/signout`;
export const GET_TOKEN_URL = `${API_URL_BASE}/auth/signin/callback`;

export const TOP_REPOS_URL = `${GITHUB_URL_BASE}/user/repos?sort=updated&affiliation=owner,collaborator,organization_member&per_page=20`;
