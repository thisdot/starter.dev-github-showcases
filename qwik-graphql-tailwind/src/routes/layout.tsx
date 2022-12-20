import { component$, Slot, useClientEffect$, useStore } from '@builder.io/qwik';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import Header from '../components/header/header';
import { useQuery } from '../utils';
import * as styles from './layout.classNames';

interface IViewer {
  login: string;
  avatarUrl: string;
}

interface UserStore {
  viewer: IViewer | null;
  isLoading: boolean;
  access_token: string | null;
}

export default component$(() => {
  const store = useStore<UserStore>({
    access_token: null,
    isLoading: false,
    viewer: {
      login: '',
      avatarUrl: '',
    },
  });

  useClientEffect$(async () => {
    store.access_token = sessionStorage.getItem(AUTH_TOKEN);
    if (!store.access_token) {
      window.location.href = '/auth/signin';
    } else {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        store.viewer = JSON.parse(storedUser);
      } else {
        store.isLoading = true;
        const abortController = new AbortController();
        const response = await fetchAuthenticatedUser(store.access_token, abortController);
        updateUserProfile(store, response);
      }
    }
  });

  return (
    <div>
      {store.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header user={store.viewer} />
          <main class={styles.main}>
            <Slot />
          </main>
        </>
      )}
    </div>
  );
});

export function updateUserProfile(store: UserStore, response: any) {
  store.isLoading = false;
  store.viewer = response.data.viewer;
  sessionStorage.setItem('user', JSON.stringify(response.data.viewer));
}

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
