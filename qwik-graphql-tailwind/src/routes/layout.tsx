import { component$, Slot, useClientEffect$ } from '@builder.io/qwik';
import { AUTH_TOKEN } from '~/utils/constants';
import Header from '../components/header/header';
import * as styles from './layout.classNames';

export default component$(() => {
  useClientEffect$(() => {
    const access_token = sessionStorage.getItem(AUTH_TOKEN);
    if (!access_token) {
      window.location.href = '/auth/signin';
    }
  });

  return (
    <>
      <main className={styles.main}>
        <Header user={null} />
        <section className={styles.container}>
          <Slot />
        </section>
      </main>
    </>
  );
});
