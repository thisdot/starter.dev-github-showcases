import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import gqlClient from '~/lib/graphql-client';
import { FULL_USER_PROFILE_QUERY } from '~/lib/queries/UserProfile';
import { auth } from '~/services/auth.server';
import { parseQuery } from '~/components/UserRepos/parseQuery';
import ProfilePage from '~/components/ProfilePage/ProfilePage.view';
import {
  OrderDirection,
  RepositoryOrderField,
} from '~/components/RepoFilters/useRepoFilters';

type LoaderData = {
  userProfileData: any;
  owner?: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  let url = new URL(request.url);
  let after = url.searchParams.get('after');
  let before = url.searchParams.get('before');

  const afterCursor = typeof after === 'string' ? after : undefined;
  const beforeCursor = typeof before === 'string' ? before : undefined;

  const data = await gqlClient.request(
    FULL_USER_PROFILE_QUERY,
    {
      username: params.user,
      orderBy: {
        field: RepositoryOrderField.UpdatedAt,
        direction: OrderDirection.Desc,
      },
      afterCursor,
      beforeCursor,
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );
  const repositories = parseQuery(data);
  data.user.repositories = repositories;
  const userProfileData = { ...data.user };

  return json<LoaderData>({ owner: params.user, userProfileData });
};

export default function User() {
  const { userProfileData, owner } = useLoaderData();

  return <ProfilePage userProfileData={userProfileData} owner={owner} />;
}
