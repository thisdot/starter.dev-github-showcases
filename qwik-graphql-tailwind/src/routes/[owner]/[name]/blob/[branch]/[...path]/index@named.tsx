import { component$ } from '@builder.io/qwik';
import { BranchNavigation } from '~/components/branch-navigation';
import { FileViewer } from '~/components/file-viewer';

export default component$(() => {
  return (
    <div className="max-w-screen-2xl mx-auto md:py-8 px-4">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <BranchNavigation />
          <FileViewer />
        </div>
      </div>
    </div>
  );
});
