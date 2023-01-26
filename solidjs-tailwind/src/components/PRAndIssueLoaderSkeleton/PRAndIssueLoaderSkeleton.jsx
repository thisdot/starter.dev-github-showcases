import { PRAndIssuesHeader } from '../PRAndIssuesHeader';

const PRAndIssueLoaderSkeleton = () => {
  return (
    <div class="border border-gray-300 rounded-lg">
      <PRAndIssuesHeader />
      <div class="animate-pulse p-3 flex flex-col gap-2">
        <div class="w-full h-4 rounded-md bg-gray-200" />
        <div class="w-full h-4 rounded-md bg-gray-200" />
        <div class="w-full h-4 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default PRAndIssueLoaderSkeleton;
