import type { JWT } from 'next-auth/jwt';

export const REFRESH_TOKEN_ERROR = 'RefreshAccessTokenError';

// options for encrypting users JWT
export const getJwtOptions = () => ({
  encryption: true,
  secret: process.env.JWT_SECRET,
  signingKey: process.env.JWT_SIGNING_KEY,
  encryptionKey: process.env.JWT_ENCRYPTION_KEY,
});

export const calculateTokenExpiration = (expiresIn: number) =>
  Date.now() + expiresIn * 1000;

export async function refreshAccessToken(token: JWT) {
  try {
    if (typeof token.refreshToken !== 'string') {
      throw new Error('No refresh token');
    }

    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID ?? '',
      client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken,
    });

    const response = await fetch(
      `https://github.com/login/oauth/access_token?${params.toString()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    const refreshedTokens = await response.json();

    if (!response.ok || refreshedTokens.error) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expires: calculateTokenExpiration(refreshedTokens.expires_in ?? 0),
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: REFRESH_TOKEN_ERROR,
    };
  }
}
