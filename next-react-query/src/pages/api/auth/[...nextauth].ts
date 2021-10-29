import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { getJwtOptions, refreshAccessToken } from '@lib/jwt';

const options: NextAuthOptions = {
  session: {
    jwt: true,
  },
  jwt: {
    ...getJwtOptions(),
  },
  callbacks: {
    // add our GH access token to our JWT on sign in
    jwt: async (token, _, account) => {
      if (account) {
        const expires = Date.now() + (account.expires_in ?? 0) * 1000;
        token.expires = expires;
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }

      if (typeof token.expires !== 'number' || Date.now() > token.expires) {
        const refreshedToken = await refreshAccessToken(token);
        return refreshedToken;
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
