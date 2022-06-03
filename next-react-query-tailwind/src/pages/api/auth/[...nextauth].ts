import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import {
  getJwtOptions,
  refreshAccessToken,
  calculateTokenExpiration,
} from '@lib/jwt';

const options: NextAuthOptions = {
  session: {
    jwt: true,
  },
  jwt: {
    ...getJwtOptions(),
  },
  callbacks: {
    jwt: async (token, _, account) => {
      if (account) {
        const expiresIn = account.accessTokenExpires ?? account.expires_in;
        if (expiresIn) {
          token.expires = calculateTokenExpiration(expiresIn);
        }
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }

      // Fetch an updated access token if current one expires
      if (
        token.refreshToken &&
        typeof token.expires === 'number' &&
        Date.now() >= token.expires
      ) {
        return await refreshAccessToken(token);
      }

      return token;
    },
    session: async (session, token) => {
      session.error = token.error;
      return session;
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: ['user', 'read:org'],
    }),
  ],
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default handler;
