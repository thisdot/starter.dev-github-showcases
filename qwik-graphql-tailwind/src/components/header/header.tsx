import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import * as styles from './header.classNames';

export const counterPath = '/counter';
export const dataFetchingPath = '/data-fetching';

export default component$(() => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.headerWrapper}>
          <a href="/" className={styles.logo}>
            ⚡️Qwik Starter
          </a>
        </div>
      </nav>
    </header>
  );
});
