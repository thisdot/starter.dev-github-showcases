import { component$, useClientEffect$, useResource$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GET_TOKEN_URL } from '~/utils/constants';
import * as styles from '../signin/signin.classNames';

export default component$(() => {
  useClientEffect$(() => {
    const authResource = useResource$<string>(({ cleanup }) => {
      // Use `track` to trigger re-run of the the data fetching function.
      // track(() => store.greeting);

      // The `cleanup` function will be called when the function re-runs and the `AbortController` will abort the previous request.
      const abortController = new AbortController();
      cleanup(() => abortController.abort());

      // Fetch the the greeting and return Promise that resolves to the greeting.
      return getAuthToken(abortController);
    });

    console.log('authResource', authResource);
  });

  return (
    <section className={styles.section}>
      <p className={''}>Redirecting...</p>
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
  return await resp.text();
}
