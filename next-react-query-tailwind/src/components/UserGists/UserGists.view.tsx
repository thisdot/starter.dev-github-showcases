import type { GistItem } from './types';
import Link from 'next/link';
import Container from './Container';
import styles from './UserGists.module.css';

interface UserGistsProps {
  gists?: GistItem[];
}

function UserGistsView({ gists = [] }: UserGistsProps) {
  return (
    <Container>
      <div className="mt-3">
        {gists.map((gist) => (
          <div key={gist.id} className="my-1">
            <Link href={gist.url}>
              <a
                className={styles.link}
                target="_blank"
                data-testid={`user gist list item ${gist.name}`}
              >
                {gist.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default UserGistsView;
