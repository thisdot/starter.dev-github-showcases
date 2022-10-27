import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { USER_GISTS_QUERY } from '~/utils/queries/gists-query';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import GistListItem from './gist-list-item';
import { useQuery } from '~/utils/useQuery';
import { parseQuery } from './parseQuery';
import * as styles from './gists.className';
import { GistItem } from './types';

interface GistStore {
  data: GistItem[];
  isLoading: boolean;
}

export default component$(() => {
  const store = useStore<GistStore>({
    data: [],
    isLoading: true,
  });

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchGIst(abortController);
    updateGists(store, response);
  });

  return (
    <aside className={styles.container}>
      <div className="border-y py-3 space-y-5">
        <h3 data-testid="show gists list" className="font-semibold">
          Gists
        </h3>

        {store.isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="space-y-2">
            {store.data.map((gist) => (
              <GistListItem key={gist.id} {...gist} />
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
});

export function updateGists(store: GistStore, response: any) {
  const {
    data: {
      viewer: {
        gists: { nodes },
      },
    },
  } = response;
  store.data = parseQuery(nodes);
  store.isLoading = false;
}

export async function fetchGIst(abortController?: AbortController): Promise<any> {
  const { executeQuery$ } = useQuery(USER_GISTS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return await resp.json();
}
