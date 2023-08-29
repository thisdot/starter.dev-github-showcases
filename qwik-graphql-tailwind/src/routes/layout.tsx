import { component$, Slot, useClientEffect$, useStore } from '@builder.io/qwik';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import Header from '../components/header/header';
import { useQuery } from '../utils';
import { useNavigate } from '@builder.io/qwik-city';

interface IViewer {
  login: string;
  avatarUrl: string;
}

interface UserStore {
  viewer: IViewer | null;
  access_token: string | null;
}

export default component$(() => {
  const store = useStore<UserStore>({
    access_token: null,
    viewer: {
      login: '',
      avatarUrl: '',
    },
  });
  const navigate = useNavigate();

  useClientEffect$(async () => {
    store.access_token = sessionStorage.getItem(AUTH_TOKEN);
    if (!store.access_token) {
      navigate.path = '/auth/signin';
    } else {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        store.viewer = JSON.parse(storedUser);
      } else {
        const abortController = new AbortController();
        const response = await fetchAuthenticatedUser(store.access_token, abortController);
        updateUserProfile(store, response);
      }
    }
  });

  return (
    <div>
      {store.access_token ? (
        <>
          <Header user={store.viewer} />
          <main class="min-h-screen bg-gray-100">
            <Slot />
          </main>
          <div class="flex justify-center pb-5 pt-6 mt-auto">
            <a target="_blank" rel="noreferrer noopener" href="https://www.netlify.com">
              <img src="https://www.netlify.com/v3/img/components/netlify-light.svg" alt="Deploys by Netlify" />
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
});

export function updateUserProfile(store: UserStore, response: any) {
  store.viewer = response.data.viewer;
  sessionStorage.setItem('user', JSON.stringify(response.data.viewer));
}

export async function fetchAuthenticatedUser(token: string | null, abortController?: AbortController) {
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
