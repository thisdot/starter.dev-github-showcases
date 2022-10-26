import { component$ } from '@builder.io/qwik';
import GistListItem from './gist-list-item';
import * as styles from './gists.className';

export default component$(() => {
  const gists = [
    {
      id: '1',
      name: 'Gist 1',
      url: 'https://gist.github.com/1',
    },
    {
      id: '2',
      name: 'Gist 2',
      url: 'https://gist.github.com/2',
    },
  ];

  return (
    <aside className={styles.container}>
      <div className="border-y py-3 space-y-5">
        <h3 data-testid="show gists list" className="font-semibold">
          Gists
        </h3>

        <ul className="space-y-2">
          {gists.map((gist) => (
            <GistListItem key={gist.id} {...gist} />
          ))}
        </ul>
      </div>
    </aside>
  );
});
