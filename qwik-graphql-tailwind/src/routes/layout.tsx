import { component$, Resource, Slot, useClientEffect$, useResource$, useStore } from '@builder.io/qwik';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import Header from '../components/header/header';
import { useQuery } from '../utils';
import * as styles from './layout.classNames';

interface UserStore {
  access_token: string | null;
}

export default component$(() => {
  const store = useStore<UserStore>({
    access_token: null,
  });

  useClientEffect$(async () => {
    store.access_token = sessionStorage.getItem(AUTH_TOKEN);
    if (!store.access_token) {
      window.location.href = '/auth/signin';
    }
  });

  if (!store.access_token) {
    return <div>Loading...</div>;
  }

  const userResource = useResource$<any>(({ track, cleanup }) => {
    track(() => store.access_token);
    const abortController = new AbortController();
    cleanup(() => abortController.abort());
    return fetchAuthenticatedUser(store.access_token, abortController);
  });

  return (
    <div>
      <Resource value={userResource} onResolved={({ data }) => <Header user={data?.viewer} />}></Resource>
      <main className={styles.main}>
        <Slot />
      </main>
    </div>
  );
});

export async function fetchAuthenticatedUser(token: string | null, abortController?: AbortController): Promise<any> {
  const { executeQuery$ } = useQuery(`
    query ViewerQuery {
      viewer {
        avatarUrl
        login
      }
    }
  `);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${token}`,
    },
  });

  return await resp.json();
}
