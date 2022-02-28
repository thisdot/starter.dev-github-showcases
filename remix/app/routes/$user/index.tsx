import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import gqlClient from '~/lib/graphql-client';
import { USER_PROFILE_QUERY } from '~/lib/queries/UserProfile';
import { auth } from '~/services/auth.server';
import { UserProfileViewProps } from '~/components/UserProfile/UserProfile.view';
import { USER_REPOS_QUERY } from '~/lib/queries/UserRepos';
import {
  OrderDirection,
  RepositoryOrderField,
  useRepoFilters,
} from '~/components/RepoFilters';
import { parseQuery } from '~/components/UserRepos/parseQuery';
import ProfilePage from '~/components/ProfilePage/ProfilePage.view';

type LoaderData = {
  user: UserProfileViewProps;
  repositories: any;
  owner?: string;
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

  const afterCursor = undefined;
  const beforeCursor = undefined;

  const repos = await gqlClient.request(
    USER_REPOS_QUERY,
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
  const repositories = parseQuery(repos);
  return json<LoaderData>({ user, repositories, owner: params.user });
};

export default function User() {
  const repoFilters = useRepoFilters();
  const { user, repositories, owner } = useLoaderData();

  return <ProfilePage repos={repositories.repos} user={user} owner={owner} />;
}
