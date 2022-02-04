import type { ActionFunction, LoaderFunction } from 'remix';
import { Form, json, useLoaderData } from 'remix';
import type { GitHubProfile } from 'remix-auth-github';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { parseQuery } from '~/components/UserTopRepos/parseQuery';
import { parseQueryUserGists } from '~/components/UserGists/parseQuery';
import { USER_TOP_REPOS_QUERY } from '~/lib/queries/UserTopRepos';
import { USER_GISTS_QUERY } from '~/lib/queries/UserGists';
import { CURRENT_USER_QUERY } from '~/lib/queries/UserDropdown';

type LoaderData = {
  profile: GitHubProfile;
  repos: TopRepo[];
  userGists: GistItem[];
  userDropDown: any;
};

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: '/login' });
};

export const loader: LoaderFunction = async ({ request }) => {
  const { profile, accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  // TODO: refactor to components
  // tweak gqlClient to include accessToken in the base
  const data = await gqlClient.request(USER_TOP_REPOS_QUERY, undefined, {
    authorization: `Bearer ${accessToken}`,
  });
  const gists = await gqlClient.request(USER_GISTS_QUERY, undefined, {
    authorization: `Bearer ${accessToken}`,
  });

  const userDropDown = await gqlClient.request(CURRENT_USER_QUERY, undefined, {
    authorization: `Bearer ${accessToken}`,
  });

  const repos = parseQuery(data);
  const userGists = parseQueryUserGists(gists);

  return json<LoaderData>({ profile, repos, userGists, userDropDown });
};

export default function Screen() {
  const { profile, repos, userGists, userDropDown } = useLoaderData<LoaderData>();
  console.log('profile',profile);
  console.log('topRepos',repos);
  console.log('userGists',userGists)
  console.log('userDropDown',userDropDown)
  return (
    <div className="w-full  min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside className="w-full lg:w-96 bg-white p-8">
        {/* <p>User Gists go here</p> */}
        {/* <UserGistsView gists={userGists}/> */}
      </aside>
      <main className="max-w-screen-lg w-full">
        <div className="p-12">
          <Form method="post" className="text-right">
            <button>Log Out</button>
          </Form>
          <h2 className="text-lg font-medium mb-4">Top Repositories</h2>
          {/* <UserTopReposView repos={repos} login={profile._json.login}/> */}
        </div>
      </main>
    </div>
  );
}
