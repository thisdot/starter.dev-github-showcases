import gqlClient from '@lib/gqlClient';
import { useUserGistsQuery } from '@lib/github';
import UserGistsView from './UserGists.view';
import { parseQuery } from './parseQuery';

function UserGists() {
  const { data, isLoading, error } = useUserGistsQuery(gqlClient);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error!</div>;
  }

  const gists = parseQuery(data);

  return <UserGistsView gists={gists} />;
}

export default UserGists;
