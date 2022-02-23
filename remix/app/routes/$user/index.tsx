import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import gqlClient from '~/lib/graphql-client';
import { USER_PROFILE_QUERY } from '~/lib/queries/UserProfile';
import { auth } from '~/services/auth.server';
import UserProfileView, {
  UserProfileViewProps,
} from '~/components/UserProfile/UserProfile.view';

type LoaderData = {
  user: UserProfileViewProps;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  const { user } = await gqlClient.request(
    USER_PROFILE_QUERY,
    { username: params.user },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  return json<LoaderData>({ user });
};

export default function User() {
  const { user } = useLoaderData();
  return (
    <div className="w-full  min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-white">
      <aside className="w-full lg:w-96 p-8">
        <UserProfileView {...user} />
      </aside>
    </div>
  );
}
