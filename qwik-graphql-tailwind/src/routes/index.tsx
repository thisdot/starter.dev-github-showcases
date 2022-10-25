import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import * as styles from './homepage.classNames';
import Repositories from './repositories';

export default component$(() => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1Text}>Welcome to Qwik⚡️showcase</h1>
      <Repositories />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Starter Kit',
};
