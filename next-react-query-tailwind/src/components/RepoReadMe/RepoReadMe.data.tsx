import gqlClient from '@lib/gqlClient';
import { useRepoReadMeQuery } from '@lib/github';
import { useRepo } from '@context/RepoContext';
import { parseQuery } from './parseQuery';
import RepoReadMeView from './RepoReadMe.view';
import Empty from './Empty';

function RepoReadMe() {
  const repo = useRepo();
  const { data, isLoading, error } = useRepoReadMeQuery(gqlClient, {
    owner: repo.owner,
    name: repo.name,
    expression: repo.path ? `HEAD:${repo.path}/README.md` : 'HEAD:README.md',
  });

  if (isLoading || error || !data) {
    return null;
  }

  const readme = parseQuery(data);

  return readme ? <RepoReadMeView readme={readme} /> : <Empty />;
}

export default RepoReadMe;
