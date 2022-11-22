import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import * as styles from './homepage.classNames';
import Gists from '../components/gists';
import TopRepos from '../components/top-repos';

export default component$(() => {
  return (
    <div className={styles.container}>
      <Gists />
      <div className={styles.content}>
        <TopRepos />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Starter Kit',
};
