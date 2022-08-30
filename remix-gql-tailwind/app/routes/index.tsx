import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { GitHubProfile } from 'remix-auth-github';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { parseQuery } from '~/components/User/UserTopRepos/parseQuery';
import { parseQueryUserGists } from '~/components/User/UserGists/parseQuery';
import { USER_TOP_REPOS_QUERY } from '~/lib/queries/UserTopRepos';
import { USER_GISTS_QUERY } from '~/lib/queries/UserGists';
import UserTopReposView from '~/components/User/UserTopRepos/UserTopRepos.view';
import UserGistsView from '~/components/User/UserGists/UserGists.view';
import { TopRepo } from '~/components/User/UserTopRepos/types';
import { GistItem } from '~/components/User/UserGists/types';

type LoaderData = {
  profile: GitHubProfile;
  userRepos: TopRepo[];
  userGists: GistItem[];
};

// localized ErrorBoundary
export function ErrorBoundary({ error }: any) {
  return <div className="text-sm">Error: {error.message}</div>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const { profile, accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });
  const repos = await gqlClient.request(USER_TOP_REPOS_QUERY, undefined, {
    authorization: `Bearer ${accessToken}`,
  });
  const gists = await gqlClient.request(USER_GISTS_QUERY, undefined, {
    authorization: `Bearer ${accessToken}`,
  });

  const userRepos = parseQuery(repos);
  const userGists = parseQueryUserGists(gists);

  return json<LoaderData>({ profile, userRepos, userGists });
};

export default function Screen() {
  const { profile, userRepos, userGists } = useLoaderData<LoaderData>();

  return (
    <div className="flex  min-h-[calc(100vh-70px)] w-full flex-col-reverse bg-gray-100 lg:flex-row">
      <aside className="w-full bg-white p-8 lg:w-96">
        <UserGistsView gists={userGists} />
      </aside>
      <main className="w-full max-w-screen-lg">
        <div className="p-12">
          <h2 className="mb-4 text-lg font-medium">Top Repositories</h2>
          <UserTopReposView repos={userRepos} login={profile._json.login} />
        </div>
      </main>
    </div>
  );
}
