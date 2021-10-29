import type { JWT } from 'next-auth/jwt';

// options for encrypting users JWT
export const getJwtOptions = () => ({
  encryption: true,
  secret: process.env.JWT_SECRET,
  signingKey: process.env.JWT_SIGNING_KEY,
  encryptionKey: process.env.JWT_ENCRYPTION_KEY,
});

export async function refreshAccessToken(token: JWT) {
  try {
    if (typeof token.refreshToken !== 'string') {
      throw new Error('No refresh token');
    }

    const response = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID ?? '',
          client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
          grant_type: 'refresh_token',
          refresh_token: token.refreshToken,
        }),
      }
    );

    const refreshedTokens = await response.json();

    if (!response.ok || refreshedTokens.error) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
