import type { ActionFunction, LoaderFunction } from 'remix';
import { Form, json, useLoaderData } from 'remix';
import type { GitHubProfile } from 'remix-auth-github';
import { auth } from '~/services/auth.server';

type LoaderData = { profile: GitHubProfile };

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: '/login' });
};

export const loader: LoaderFunction = async ({ request }) => {
  const { profile } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  return json<LoaderData>({ profile });
};

export default function Screen() {
  const { profile } = useLoaderData<LoaderData>();
  console.log(profile);
  return (
    <div className="w-full  min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside className="w-full lg:w-96 bg-white p-8">
        <p>User Gists go here</p>
      </aside>
      <main className="max-w-screen-lg w-full">
        <div className="p-12">
          <Form method="post" className='text-right'>
            <button>Log Out</button>
          </Form>
          <h2 className="text-lg font-medium mb-4">Top Repositories</h2>
          <p>User Top Repos Go Here</p>
        </div>
      </main>
    </div>
  );
}
