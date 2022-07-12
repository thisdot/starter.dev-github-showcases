import type { GistItem } from './types';
import Container from './container';

import * as styles from './UserGists.classNames';

interface UserGistsProps {
  gists?: GistItem[];
}

function UserGistsView({ gists = [] }: UserGistsProps) {
  return (
    <Container>
      <div className="mt-3">
        {gists.map((gist) => (
          <div key={`${gist.id}-${gist.name}`} className="my-1">
            <a href={gist.url} className={styles.link} target="_blank">
              {gist.name}
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default UserGistsView;
