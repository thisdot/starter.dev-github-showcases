import { component$, useServerMount$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GET_TOKEN_URL } from '~/utils/constants';
import * as styles from '../signin/signin.classNames';

export default component$(() => {
  useServerMount$(async () => {
    const abortController = new AbortController();
    const data: any = await getAuthToken(abortController);

    console.log(data);
    // sessionStorage.setItem('token', data.token);
  });

  return (
    <section className={styles.section}>
      <p className={'text-white'}>Redirecting...</p>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Redirecting...',
};

export async function getAuthToken(abortController?: AbortController): Promise<string> {
  const resp = await fetch(GET_TOKEN_URL, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    credentials: 'include',
    signal: abortController?.signal,
  });
  console.log('resp', resp);

  // return await resp.text();
  const json = await resp.json();
  console.log('json', json);

  return json;
}
