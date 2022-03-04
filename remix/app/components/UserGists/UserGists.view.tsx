import type { GistItem } from './types';
import Container from './container';

import { Link } from 'remix';
import * as styles from './UserGists.classNames';

interface UserGistsProps {
  gists?: GistItem[];
}

function UserGistsView({ gists = [] }: UserGistsProps) {
  return (
    <Container>
      <div className="mt-3">
        {gists.map((gist) => (
          <div key={gist.id} className="my-1">
            <Link to={gist.url} className={styles.link} target="_blank">
              {gist.name}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default UserGistsView;
