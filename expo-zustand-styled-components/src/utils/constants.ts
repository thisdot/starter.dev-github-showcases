import { SERVER_BASE_URL, WEB_REDIRECT_URI, MOBILE_REDIRECT_URI, GITHUB_URL } from '@env';
import { Platform } from 'react-native';

export const AUTH_URL = `${SERVER_BASE_URL}/.netlify/functions/signin?redirect_url=${
  Platform.OS === 'web' ? WEB_REDIRECT_URI : MOBILE_REDIRECT_URI
}`;
export const GITHUB_GRAPHQL = `${GITHUB_URL}/graphql`;
