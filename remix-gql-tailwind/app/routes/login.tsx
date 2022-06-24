import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
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
    <section className="flex h-screen w-full items-center justify-center bg-black">
      <Form method="post" action="/auth/github">
        {error && <div>{error.message}</div>}
        <button className="rounded-md border-2 border-zinc-700 px-20 py-2 text-zinc-100 transition-all hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900">
          Sign In with GitHub
        </button>
      </Form>
    </section>
  );
}
