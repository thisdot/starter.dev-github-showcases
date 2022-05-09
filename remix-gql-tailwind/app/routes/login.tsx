import { Form, json, useLoaderData } from 'remix';

import type { LoaderFunction } from 'remix';
import { auth } from '~/services/auth.server';
import { sessionStorage } from '~/services/session.server';
type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, { successRedirect: '/private' });
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );
  const error = session.get(auth.sessionErrorKey) as LoaderData['error'];
  return json<LoaderData>({ error });
};

export default function Screen() {
  const { error } = useLoaderData<LoaderData>();

  return (
    <section className="h-screen w-full flex items-center justify-center bg-black">
      <Form method="post" action="/auth/github">
        {error && <div>{error.message}</div>}
        <button className="border-2 border-zinc-700 text-zinc-100 px-20 py-2 rounded-md hover:bg-zinc-100 hover:border-zinc-100 hover:text-zinc-900 transition-all">
          Sign In with GitHub
        </button>
      </Form>
    </section>
  );
}
