import { API_URL_BASE } from './url.constants';

export const AUTH_TOKEN = 'token';

export const SIGN_IN_URL = `${API_URL_BASE}/auth/signin`;
export const SIGN_OUT_URL = `${API_URL_BASE}/auth/signout`;
export const GET_TOKEN_URL = `${API_URL_BASE}/auth/signin/callback`;
