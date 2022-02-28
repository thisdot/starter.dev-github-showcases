import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import gqlClient from '~/lib/graphql-client';
import { USER_PROFILE_QUERY } from '~/lib/queries/UserProfile';
import { auth } from '~/services/auth.server';
import UserProfileView, {
  UserProfileViewProps,
} from '~/components/UserProfile/UserProfile.view';
import UserReposView from '~/components/UserRepos/UserRepos.view';
import { USER_REPOS_QUERY } from '~/lib/queries/UserRepos';
import { Repo } from '~/components/UserRepos/types';
import { OrderDirection, RepositoryOrderField, useRepoFilters } from '~/components/RepoFilters';
import { filterRepos } from '~/components/UserRepos/filterRepos';
import { getLanguages } from '~/components/UserRepos/getLanguages';
import { OrgReposQuery, parseQuery, UserReposQuery } from '~/components/UserRepos/parseQuery';

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

  const afterCursor =  undefined;
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
    beforeCursor
  },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );
  const repositories = parseQuery(repos)
  return json<LoaderData>({ user, repositories, owner: params.user });
};

export default function User() {
  const repoFilters = useRepoFilters();
  const { user, repositories, owner } = useLoaderData();
  
  return (
    <div className="max-w-screen-2xl mx-auto py-8 px-4">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4 xl:col-span-3 relative md:-top-20">
          <UserProfileView {...user} />
        </div>
        <div className="col-span-12 md:col-span-8 xl:col-span-9">
          <UserReposView repos={repositories.repos} owner={owner} />
        </div>
      </div>
    </div>
  );
}
