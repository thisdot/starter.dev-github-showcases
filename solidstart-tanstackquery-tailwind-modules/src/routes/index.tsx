import { Switch, Match } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import getGists from '~/services/get-gists';
import { GistsData } from '~/components/GistPanel';
import getTopRepos from '~/services/get-top-repos';
import { TopRepos } from '~/components/TopRepos';
import { LoadingPulseDot } from '~/components/LoadingPulseDot';

const Home = () => {
  const gists = createQuery(() => ['gists'], getGists);
  const topRepos = createQuery(() => ['topRepos'], getTopRepos);

  return (
    <div class="w-full min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside class="w-full lg:w-96 bg-white p-12">
        <Switch>
          <Match when={gists.isError}>
            <p>Error</p>
          </Match>
          <Match when={gists.isLoading}>
            <LoadingPulseDot />
          </Match>
          <Match when={gists.isSuccess && !gists.isLoading}>
            <GistsData gists={gists.data || []} />
          </Match>
        </Switch>
      </aside>
      <main class="max-w-screen-lg w-full">
        <div class="p-12">
          <Switch>
            <Match when={topRepos.isError}>
              <p>Error</p>
            </Match>
            <Match when={topRepos.isLoading}>
              <LoadingPulseDot />
            </Match>
            <Match when={topRepos.isSuccess && !topRepos.isLoading}>
              <h2 class="text-lg font-medium mb-4">Top Repositories</h2>
              <TopRepos
                topRepos={topRepos.data?.repos || []}
                login={topRepos.data?.login || ''}
              />
            </Match>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Home;
