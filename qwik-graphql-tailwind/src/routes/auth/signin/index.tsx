import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SIGN_IN_URL } from '~/utils/constants';
import * as styles from './signin.classNames';

export default component$(() => {
  return (
    <section className={styles.section}>
      <button
        className={styles.button}
        onClick$={() => {
          window.location.href = SIGN_IN_URL;
        }}
      >
        Sign In with GitHub
      </button>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Authenticate with GitHub',
};
