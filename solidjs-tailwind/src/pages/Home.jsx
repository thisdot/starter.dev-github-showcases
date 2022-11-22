import { createResource } from 'solid-js';
import { useAuth } from '../auth';
import { useOctokit } from '../github';
import { TopRepos } from '../components/TopRepos';
import * as styles from './Home.classNames';

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
          <h2 class={styles.title}>Top Repositories</h2>
          <TopRepos repos={[]} />
        </div>
      </main>
    </div>
  );
};

export default Home;
