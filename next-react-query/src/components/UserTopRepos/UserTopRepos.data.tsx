import gqlClient from '@lib/gqlClient';
import { useUserTopReposQuery } from '@lib/github';
import { parseQuery } from './parseQuery';
import UserTopReposView from './UserTopRepos.view';
import { LoadingPulseDots } from '@components/Loading';

function UserTopRepos() {
  const { data, isLoading, error } = useUserTopReposQuery(gqlClient);

  if (isLoading) {
    return <LoadingPulseDots />;
  }

  if (error || !data) {
    return (
      <div className="text-sm">
        Error: Failed to load your repos. Try refreshing the page.
      </div>
    );
  }

  const repos = parseQuery(data);

  return <UserTopReposView repos={repos} login={data.viewer.login} />;
}

export default UserTopRepos;
