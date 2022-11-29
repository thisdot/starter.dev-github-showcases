import { createEffect, createResource, createSignal } from 'solid-js';
import { TopRepos } from '../components/TopRepos';
import getTopRepos from '../services/get-top-repos';

const Home = () => {
  const [login, setLogin] = createSignal('');
  const [repos, setRepos] = createSignal([]);

  const [resp] = createResource(() => getTopRepos());

  createEffect(() => {
    if (resp() && !resp.loading) {
      setRepos(resp().repos);
      setLogin(resp().login);
    }
  });

  return (
    <div class="w-full min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside class="w-full lg:w-96 bg-white p-8">
        <span>Here will be the gists</span>
      </aside>
      <main class="max-w-screen-lg w-full">
        <div class="p-12">
          <h2 class="text-lg font-medium mb-4">Top Repositories</h2>
          {resp.loading ? (
            <div>Loading...</div>
          ) : (
            <TopRepos repos={repos()} login={login()} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
