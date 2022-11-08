import { createResource } from 'solid-js';
import { useAuth } from '../auth';
import { useOctokit } from '../github';
import * as styles from './homepage.classNames';

const Home = () => {
  useAuth().preventUnauthorised();

  const [data] = createResource(() => {
    try {
      return useOctokit()
        .rest.users.getAuthenticated()
        .then((response) => response.data);
    } catch {
      return Promise.resolve({});
    }
  });

  return (
    <div class={styles.container}>
      <aside class={styles.aside}>
        <span>Here will be the gists</span>
      </aside>
      <main class={styles.content}>
        <div class="p-12">
          <h2 class={styles.title}>
            Top Repositories
          </h2>
          <span>Here will be the top repos. Welcome {data().login}</span>
        </div>
      </main>
    </div>
  );
};

export default Home;
