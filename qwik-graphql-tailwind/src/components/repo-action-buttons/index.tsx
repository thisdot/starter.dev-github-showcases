import { component$ } from '@builder.io/qwik';
import { GitBranchIcon, StarIcon, EyeIcon } from '../icons';

interface RepoActionButtonsProps {
  stargazerCount: number | string;
  forkCount: number | string;
  watcherCount: number | string;
}

export const RepoActionButtons = component$(({ watcherCount, stargazerCount, forkCount }: RepoActionButtonsProps) => {
  return (
    <div className="flex space-x-4 gap-0.5">
      <span className="inline-flex shadow-sm rounded-md">
        <button className="inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25">
          <EyeIcon className="w-4 h-4 inline mb-0.5 mr-1" />
          Watch
        </button>
        <button className="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600">
          {watcherCount}
        </button>
      </span>
      <span className="inline-flex shadow-sm rounded-md">
        <button className="inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25">
          <StarIcon className="w-4 h-4 inline mb-0.5 mr-1" />
          Star
        </button>
        <button className="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600">
          {stargazerCount}
        </button>
      </span>
      <span className="inline-flex shadow-sm rounded-md">
        <button className="inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25">
          <GitBranchIcon className="w-4 h-4 inline mb-0.5 mr-1" />
          Fork
        </button>
        <button className="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600">
          {forkCount}
        </button>
      </span>
    </div>
  );
});
