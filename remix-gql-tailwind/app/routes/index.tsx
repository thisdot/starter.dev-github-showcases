import { LoaderFunction } from 'remix';
import { json, useLoaderData } from 'remix';
import type { GitHubProfile } from 'remix-auth-github';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { parseQuery } from '~/components/UserTopRepos/parseQuery';
import { parseQueryUserGists } from '~/components/UserGists/parseQuery';
import { USER_TOP_REPOS_QUERY } from '~/lib/queries/UserTopRepos';
import { USER_GISTS_QUERY } from '~/lib/queries/UserGists';
import UserTopReposView from '~/components/UserTopRepos/UserTopRepos.view';
import UserGistsView from '~/components/UserGists/UserGists.view';
import { TopRepo } from '~/components/UserTopRepos/types';
import { GistItem } from '~/components/UserGists/types';

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
    <div className="w-full  min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside className="w-full lg:w-96 bg-white p-8">
        <UserGistsView gists={userGists} />
      </aside>
      <main className="max-w-screen-lg w-full">
        <div className="p-12">
          <h2 className="text-lg font-medium mb-4">Top Repositories</h2>
          <UserTopReposView repos={userRepos} login={profile._json.login} />
        </div>
      </main>
    </div>
  );
}
