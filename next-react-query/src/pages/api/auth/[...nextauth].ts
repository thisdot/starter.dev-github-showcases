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
        // add our GH access token to our JWT on sign in
        token.expires = calculateTokenExpiration(account.expires_in ?? 0);
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }

      if (typeof token.expires !== 'number' || Date.now() >= token.expires) {
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
    }),
  ],
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default handler;
