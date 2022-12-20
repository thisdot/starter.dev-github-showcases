import { component$, useContext } from '@builder.io/qwik';
import { RepoReadMe } from '~/components/repo-read-me';
import { RepoAboutWidget } from '~/components/repo-about';
import { FileExplorer } from '~/components/file-explorer';
import { RepoContext } from './layout-named';

export default component$(() => {
  const store = useContext(RepoContext);

  if (!store.info.data) {
    return <div />;
  }

  return (
    <div class="max-w-screen-2xl mx-auto md:py-8 px-4 bg-white">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 md:col-span-7 xl:col-span-9">
          <FileExplorer branch={store.branch} />
          <RepoReadMe />
        </div>
        <div class="col-span-12 md:col-span-5 xl:col-span-3">
          <RepoAboutWidget />
        </div>
      </div>
    </div>
  );
});
