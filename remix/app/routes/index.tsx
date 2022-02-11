import { LoaderFunction } from 'remix';
import { json, useLoaderData } from 'remix';
import type { GitHubProfile } from 'remix-auth-github';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { parseQuery } from '~/components/UserTopRepos/parseQuery';
import { USER_TOP_REPOS_QUERY } from '~/lib/queries/UserTopRepos';
import UserTopReposView from '~/components/UserTopRepos/UserTopRepos.view';
import { TopRepo } from '~/components/UserTopRepos/types';

type LoaderData = {
  profile: GitHubProfile;
  userRepos: TopRepo[];
};

// localized ErrorBoundary
export function ErrorBoundary({ error }: any) {
  console.error(error);
  return <div className="text-sm">Error: {error.message}</div>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const { profile, accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });
  const repos = await gqlClient.request(USER_TOP_REPOS_QUERY, undefined, {
    authorization: `Bearer ${accessToken}`,
  });

  const userRepos = parseQuery(repos);

  return json<LoaderData>({ profile, userRepos });
};

export default function Screen() {
  const { profile, userRepos } = useLoaderData<LoaderData>();

  return (
    <div className="w-full  min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside className="w-full lg:w-96 bg-white p-8">Gists</aside>
      <main className="max-w-screen-lg w-full">
        <div className="p-12">
          <h2 className="text-lg font-medium mb-4">Top Repositories</h2>
          <UserTopReposView repos={userRepos} login={profile._json.login} />
        </div>
      </main>
    </div>
  );
}
