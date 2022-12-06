import { component$ } from '@builder.io/qwik';
import { RepoReadMe } from '~/components/repo-read-me';
import { RepoAboutWidget } from '~/components/repo-about';
import { BranchNavigation } from '~/components/branch-navigation';
import { FileExplorer } from '~/components/file-explorer';

export default component$(() => {
  return (
    <div className="max-w-screen-2xl mx-auto md:py-8 px-4 bg-white">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7 xl:col-span-9">
          <BranchNavigation />
          <FileExplorer />
          <RepoReadMe />
        </div>
        <div className="col-span-12 md:col-span-5 xl:col-span-3">
          <RepoAboutWidget />
        </div>
      </div>
    </div>
  );
});
