import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { RepoIcon } from '~/components/icons/repo.icon';

export const OrgProfileCard = component$(() => {
  return (
    <div className="relative pt-8 bg-gray-50">
      <div className="border-b border-gray-200 pt-2 ">
        <div className="grid grid-cols-12 max-w-screen-lg mx-auto">
          <div className="col-span-12 md:col-span-8 xl:col-span-12 px-4">
            <Link className="text-black">
              <h1 className="flex text-2xl font-bold">
                <img
                  className="mr-1"
                  width="30"
                  height="30"
                  src="https://avatars.githubusercontent.com/u/22839396?v=4"
                />
                This Dot
              </h1>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-8 xl:col-span-12">
            <div className="px-4">
              <nav className="flex" aria-label="Tabs">
                <div className="p-4 text-sm border-b-2 border-yellow-500">
                  <a>
                    <RepoIcon className="w-6 h-6 text-gray-600" />
                    <span className="text-black font-semibold">Repositories</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto py-8 px-4">There will be repos soon.</div>
    </div>
  );
});
