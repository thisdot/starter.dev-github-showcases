import { config } from 'dotenv';
config()

export const API_URL = process.env.API_URL;
export const CLIENT_ID = process.env.CLIENT_ID;
export const GITHUB_URL_BASE = process.env.GITHUB_URL;
export const SIGN_IN_BASE_URL = `${API_URL}/auth/signin`;
export const SIGN_OUT_URL = `${API_URL}/auth/signout`;

export const GITHUB_GRAPHQL = `${GITHUB_URL_BASE}/graphql`;

export const AUTH_RESOURCE = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: `https://github.com/settings/connections/applications/${CLIENT_ID}`,
};