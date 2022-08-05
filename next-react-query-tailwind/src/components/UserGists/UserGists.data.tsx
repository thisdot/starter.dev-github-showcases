import gqlClient from '@lib/gqlClient';
import { useUserGistsQuery } from '@lib/github';
import UserGistsView from './UserGists.view';
import Container from './Container';
import { LoadingTextLine } from '@components/Loading';
import { parseQuery } from './parseQuery';
import styles from './UserGists.module.css';

function UserGists() {
  const { data, isLoading, error } = useUserGistsQuery(gqlClient);

  if (isLoading) {
    return (
      <Container>
        <div className="mt-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <LoadingTextLine key={i} className="my-1" />
          ))}
        </div>
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container>
        <p className={styles.error}>Error: Failed to load user gists</p>
      </Container>
    );
  }

  if (data.viewer.gists.nodes?.length === 0) {
    return (
      <Container>
        <p className={styles.error} data-testid="empty gist list">
          User does not have any gists
        </p>
      </Container>
    );
  }

  const gists = parseQuery(data);

  return <UserGistsView gists={gists} />;
}

export default UserGists;
