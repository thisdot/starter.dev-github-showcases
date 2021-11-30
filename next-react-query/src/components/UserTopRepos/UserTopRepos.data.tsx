import gqlClient from '@lib/gqlClient';
import { useUserTopReposQuery } from '@lib/github';
import { parseQuery } from './parseQuery'
import UserTopReposView from './UserTopRepos.view';

function UserTopRepos() {
  const { data, isLoading, error} = useUserTopReposQuery(gqlClient);

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  const repos = parseQuery(data);

  return null;
}

export default UserTopRepos;
