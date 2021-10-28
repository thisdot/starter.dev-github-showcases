import { Repository, useMyReposQuery } from '@lib/github';
import gqlClient from '@lib/gqlClient';
import MyRepoListView from './MyRepoList.view';
import { LoadingPulseDots } from '../Loading';

function MyRepoList() {
  const { data } = useMyReposQuery(
    gqlClient,
    {},
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  if (!data) {
    return <LoadingPulseDots />;
  }

  return (
    <MyRepoListView
      repositories={(data.viewer.repositories.nodes ?? []) as Repository[]}
    />
  );
}

export default MyRepoList;
