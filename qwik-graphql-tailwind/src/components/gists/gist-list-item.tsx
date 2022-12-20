import { component$ } from '@builder.io/qwik';
import * as styles from './gists.className';

export interface GistListProps {
  id: any;
  name: string;
  url: string;
}

export default component$(({ name, url }: GistListProps) => {
  return (
    <li>
      <a href={url} class={styles.link} target="_blank" data-testid={`user gist list item ${name}`}>
        {name}
      </a>
    </li>
  );
});
