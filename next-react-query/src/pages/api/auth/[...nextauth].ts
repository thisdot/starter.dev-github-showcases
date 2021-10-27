import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";

const options: NextAuthOptions = {
  session: {
    jwt: true,
  },
  jwt: {
    // options for encrypting users JWT
    encryption: true,
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_KEY,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
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
