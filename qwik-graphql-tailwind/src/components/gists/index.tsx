import { component$, QRL, useClientEffect$, useStore } from '@builder.io/qwik';
import { USER_GISTS_QUERY } from '../../utils/queries/gists-query';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '../../utils/constants';
import GistListItem from './gist-list-item';
import { useQuery } from '../../utils/useQuery';
import { parseQuery } from './parseQuery';
import * as styles from './gists.className';
import { GistItem } from './types';
import { useSessionStorage } from '~/hook/useSessionStorage';

interface GistStore {
  data: GistItem[];
  isLoading: boolean;
}

export default component$(() => {
  const [cachedGists, setGists] = useSessionStorage('gist', '');

  const store = useStore<GistStore>({
    data: [],
    isLoading: true,
  });

  useClientEffect$(async () => {
    if (cachedGists.value) {
      store.isLoading = false;
      store.data = cachedGists.value;
    } else {
      const abortController = new AbortController();
      const response = await fetchGIst(abortController);
      updateGists(store, response, setGists);
    }
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

export function updateGists(store: GistStore, response: any, setGists: QRL<(value: any) => void>) {
  const {
    data: {
      viewer: {
        gists: { nodes },
      },
    },
  } = response;
  store.data = parseQuery(nodes);
  store.isLoading = false;
  setGists(parseQuery(nodes));
}

export async function fetchGIst(abortController?: AbortController): Promise<any> {
  const { executeQuery$ } = useQuery(USER_GISTS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
