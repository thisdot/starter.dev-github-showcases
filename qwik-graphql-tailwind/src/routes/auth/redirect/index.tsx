import { component$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AUTH_TOKEN, GET_TOKEN_URL } from '~/utils/constants';
import * as styles from '../signin/signin.classNames';

export default component$(() => {
  useClientEffect$(async () => {
    const abortController = new AbortController();
    const data = await getAuthToken(abortController);
    if (data.access_token) {
      sessionStorage.setItem(AUTH_TOKEN, data.access_token);
      window.location.href = '/';
    } else {
      window.location.href = '/auth/signin';
    }
  });

  return (
    <section class={styles.section}>
      <p class="text-white">Redirecting...</p>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Redirecting...',
};

export async function getAuthToken(abortController?: AbortController): Promise<{ access_token: string }> {
  const resp = await fetch(GET_TOKEN_URL, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    credentials: 'include',
    signal: abortController?.signal,
  });

  return await resp.json();
}
