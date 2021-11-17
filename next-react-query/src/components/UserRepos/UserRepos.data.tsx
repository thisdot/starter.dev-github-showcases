import gqlClient from '@lib/gqlClient';
import { useUserReposQuery } from '@lib/github';
import { parseError } from '@lib/parseError';
import { parseQuery } from './parseQuery';
import LoadingRepos from './LoadingRepos';
import UserReposView from './UserRepos.view';

interface UserReposProps {
  username: string;
}

function UserRepos({ username }: UserReposProps) {
  const {
    data,
    isLoading,
    error: queryError,
  } = useUserReposQuery(gqlClient, {
    username,
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

  return <UserReposView repos={repos} owner={username} />;
}

export default UserRepos;
