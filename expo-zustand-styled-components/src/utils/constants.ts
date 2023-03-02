import { API_URL, GITHUB_URL, CLIENT_ID } from '@env';

export const SIGN_IN_BASE_URL = `${API_URL}/auth/signin`;
export const SIGN_OUT_URL = `${API_URL}/auth/signout`;
export const GET_TOKEN_URL = `${API_URL}/auth/token`;

export const GITHUB_GRAPHQL = `${GITHUB_URL}/graphql`;

export const AUTH_PAYLOAD = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${CLIENT_ID}`,
};
