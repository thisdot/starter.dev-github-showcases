import { Authenticator } from 'remix-auth';
import type { GitHubExtraParams, GitHubProfile } from 'remix-auth-github';
import { GitHubStrategy } from 'remix-auth-github';
import { sessionStorage } from '~/services/session.server';

if (!process.env.GITHUB_CLIENT_ID) {
  throw new Error('GITHUB_CLIENT_ID is required');
}

if (!process.env.GITHUB_CLIENT_SECRET) {
  throw new Error('GITHUB_CLIENT_SECRET is required');
}

if (!process.env.BASE_URL) {
  throw new Error('BASE_URL is required');
}

const BASE_URL = process.env.BASE_URL;

export const auth = new Authenticator<{
  profile: GitHubProfile;
  accessToken: string;
  extraParams: GitHubExtraParams;
}>(sessionStorage);

auth.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: new URL('/auth/github/callback', BASE_URL).toString(),
      scope:
        'user read:user public_repo repo repo_deployment repo:status read:repo_hook read:org read:public_key read:gpg_key',
    },
    async ({ profile, accessToken, extraParams }) => {
      return { profile, accessToken, extraParams };
    }
  )
);
