import gqlClient from '@lib/gqlClient';
import { useRouter } from 'next/router';
import { OrderDirection } from '@lib/github';
import { parseError } from '@lib/parseError';
import Pagination from '@components/Pagination';
import { parseQuery } from './parseQuery';
import LoadingRepos from './LoadingRepos';
import UserReposView from './UserRepos.view';
import { RepoFilters, useRepoFilters } from '@components/RepoFilters';
import { filterRepos } from './filterRepos';
import { getLanguages } from './getLanguages';
import { useOrgOrUserQuery } from './useOrgOrUserQuery';

interface UserReposProps {
  username: string;
  isOrg?: boolean;
}

function UserRepos({ username, isOrg = false }: UserReposProps) {
  const { query } = useRouter();

  const afterCursor = typeof query.after === 'string' ? query.after : undefined;
  const beforeCursor =
    typeof query.before === 'string' ? query.before : undefined;

  const repoFilters = useRepoFilters();
  const useReposQuery = useOrgOrUserQuery(isOrg);

  const {
    data,
    isLoading,
    error: queryError,
  } = useReposQuery(gqlClient, {
    username,
    orderBy: {
      field: repoFilters.state.sort,
      direction: OrderDirection.Desc,
    },
    afterCursor: afterCursor,
    beforeCursor: beforeCursor,
    first: repoFilters.state.first,
    last: repoFilters.state.last,
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
      <RepoFilters
        {...repoFilters}
        languages={languages}
        resultCount={filteredRepos.length}
      />
      <UserReposView repos={filteredRepos} owner={username} />
      {(repos.pageInfo?.hasNextPage || repos.pageInfo?.hasPreviousPage) && (
        <Pagination pageInfo={repos.pageInfo} link={username} />
      )}
    </>
  );
}

export default UserRepos;
