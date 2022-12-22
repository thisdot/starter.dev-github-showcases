import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { GitBranchIcon, StarIcon, EyeIcon } from '../icons';

export const RepoActionButtons = component$(() => {
  const store = useContext(RepoContext);

  return (
    <div class="flex space-x-4 gap-0.5">
      <span class="inline-flex shadow-sm rounded-md">
        <button class="inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25">
          <EyeIcon className="w-4 h-4 inline mb-0.5 mr-1" />
          Watch
        </button>
        <button class="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600">
          {store.info.data?.watcherCount || 0}
        </button>
      </span>
      <span class="inline-flex shadow-sm rounded-md">
        <button class="inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25">
          <StarIcon className="w-4 h-4 inline mb-0.5 mr-1" />
          Star
        </button>
        <button class="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600">
          {store.info.data?.stargazerCount || 0}
        </button>
      </span>
      <span class="inline-flex shadow-sm rounded-md">
        <button class="inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25">
          <GitBranchIcon className="w-4 h-4 inline mb-0.5 mr-1" />
          Fork
        </button>
        <button class="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600">
          {store.info.data?.forkCount || 0}
        </button>
      </span>
    </div>
  );
});
