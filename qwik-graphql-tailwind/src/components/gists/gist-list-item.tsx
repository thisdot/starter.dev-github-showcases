import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import * as styles from './gists.className';

export interface GistListProps {
  id: any;
  name: string;
  url: string;
}

export default component$(({ name, url }: GistListProps) => {
  return (
    <li>
      <Link href={url} className={styles.link} target="_blank" data-testid={`user gist list item ${name}`}>
        {name}
      </Link>
    </li>
  );
});
