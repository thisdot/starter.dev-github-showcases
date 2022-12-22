import { component$ } from '@builder.io/qwik';
import { RepoIcon } from '~/components/icons/repo.icon';

export const OrgProfileCard = component$(() => {
  return (
    <div class="relative pt-8 bg-gray-50">
      <div class="border-b border-gray-200 pt-2 ">
        <div class="grid grid-cols-12 max-w-screen-lg mx-auto">
          <div class="col-span-12 md:col-span-8 xl:col-span-12 px-4">
            <a class="text-black">
              <h1 class="flex text-2xl font-bold">
                <img class="mr-1" width="30" height="30" src="https://avatars.githubusercontent.com/u/22839396?v=4" />
                This Dot
              </h1>
            </a>
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            <div class="px-4">
              <nav class="flex" aria-label="Tabs">
                <div class="p-4 text-sm border-b-2 border-yellow-500">
                  <a>
                    <RepoIcon className="w-6 h-6 text-gray-600" />
                    <span class="text-black font-semibold">Repositories</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto py-8 px-4">There will be repos soon.</div>
    </div>
  );
});
