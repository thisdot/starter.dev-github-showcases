import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { getJwtOptions } from '../../../lib/getJwtOptions';

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
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }
      return Promise.resolve(token);
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
