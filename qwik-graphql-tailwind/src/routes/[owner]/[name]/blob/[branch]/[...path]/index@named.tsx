import { component$ } from '@builder.io/qwik';
import { FileViewer } from '~/components/file-viewer';

export default component$(() => {
  return (
    <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
          <FileViewer />
        </div>
      </div>
    </div>
  );
});
