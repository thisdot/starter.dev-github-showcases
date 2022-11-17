export const API_URL = import.meta.env.VITE_API_URL;
export const APP_BASE_URL = import.meta.env.VITE_BASE_URL;
export const GITHUB_URL_BASE = import.meta.env.VITE_GITHUB_URL;

export const REDIRECT_URL = `${APP_BASE_URL}/auth/redirect`;

export const SIGN_IN_BASE_URL = `${API_URL}/auth/signin`;

export const GITHUB_GRAPHQL = `${GITHUB_URL_BASE}/graphql`;
