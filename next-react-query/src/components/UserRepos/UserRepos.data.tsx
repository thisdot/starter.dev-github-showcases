import gqlClient from '@lib/gqlClient';
import { useRouter } from 'next/router';
import { useUserReposQuery, OrderDirection } from '@lib/github';
import { parseError } from '@lib/parseError';
import Pagination from '@components/Pagination';
import { parseQuery } from './parseQuery';
import LoadingRepos from './LoadingRepos';
import UserReposView from './UserRepos.view';
import { RepoFilters, useRepoFilters } from '@components/RepoFilters';
import { filterRepos } from './filterRepos';
import { getLanguages } from './getLanguages';

interface UserReposProps {
  username: string;
}

function UserRepos({ username }: UserReposProps) {
  const { query } = useRouter();

  const afterCursor = typeof query.after === 'string' ? query.after : undefined;
  const beforeCursor =
    typeof query.before === 'string' ? query.before : undefined;

  const repoFilters = useRepoFilters();

  const {
    data,
    isLoading,
    error: queryError,
  } = useUserReposQuery(gqlClient, {
    username,
    orderBy: {
      field: repoFilters.state.sort,
      direction: OrderDirection.Desc,
    },
    afterCursor,
    beforeCursor,
  });

  const repos = parseQuery(data);
  const error = parseError(queryError);

  if (isLoading) {
    return <LoadingRepos />;
  }

  if (error || !repos) {
    return (
      <div
        data-testid="errorMsg"
        className="py-4 text-lg font-medium text-gray-800"
      >
        Error Loading Repositories. Check console / network tab for more
        information.
      </div>
    );
  }

  const filteredRepos = filterRepos(repos.repos, repoFilters.state);
  const languages = getLanguages(filteredRepos);

  return (
    <>
      <RepoFilters {...repoFilters} languages={languages} />
      <UserReposView repos={filteredRepos} owner={username} />
      <Pagination pageInfo={repos.pageInfo} owner={username} />
    </>
  );
}

export default UserRepos;
