import { component$ } from '@builder.io/qwik';
import { BranchNavigation } from '~/components/branch-navigation';
import { FileExplorer } from '~/components/file-explorer';

export default component$(() => {
  return (
    <div className="max-w-screen-2xl mx-auto md:py-8 px-4">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <BranchNavigation />
          <FileExplorer />
        </div>
      </div>
    </div>
  );
});
