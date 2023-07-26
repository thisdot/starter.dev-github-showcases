import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      token.image = token.picture;
      session.user = token;
      return session;
    },
    async signIn(user) {
      const isAllowedToSignIn = user ? true : false;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      authorization: {
        params: {
          url: '',
          scope: 'repo read:user user:email read:org',
        },
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(authOptions);
