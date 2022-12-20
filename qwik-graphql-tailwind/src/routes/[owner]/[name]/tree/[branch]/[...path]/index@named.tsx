import { component$ } from '@builder.io/qwik';
import { FileExplorer } from '~/components/file-explorer';

export default component$(() => {
  return (
    <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
          <FileExplorer />
        </div>
      </div>
    </div>
  );
});
