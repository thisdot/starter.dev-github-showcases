import axios from 'axios';
import calculateTokenExpiration from './expiration';

export const REFRESH_TOKEN_ERROR = 'RefreshAccessTokenError';

/**
 * Fetch a new access token from the refresh token.
 * @param {Object} token - old access token
 * @returns {Object} new access token
 */
export default async (token) => {
  try {
    if (typeof token.refreshToken !== 'string') {
      throw new Error('Invalid refresh token');
    }

    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID ?? '',
      client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken,
    });

    const response = await axios({
      url: `https://github.com/login/oauth/access_token?${params.toString()}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const newToken = await response.json();

    if (!response.ok || newToken.error) {
      throw new Error('Failed to get new token');
    }

    const { access_token, expires_in, refresh_token } = newToken;

    return {
      ...token,
      accessToken: access_token,
      expires:
        typeof expires_in === 'number'
          ? calculateTokenExpiration(expires_in)
          : undefined,
      refreshToken: refresh_token,
    };
  } catch (error) {
    return {
      ...token,
      error: REFRESH_TOKEN_ERROR,
    };
  }
};
