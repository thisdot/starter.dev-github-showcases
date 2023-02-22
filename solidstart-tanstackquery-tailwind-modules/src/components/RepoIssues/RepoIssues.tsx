import { useParams } from '@solidjs/router';
import PRAndIssuesData from '../PRAndIssuesData';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination';
import { issuesStore } from '~/stores/issues-store';
import {
  activeTab,
  selectedLabel,
  setSelectedLabel,
  setSelectedMilestone,
  setSortBy,
  sortBy,
} from '../PRAndIssuesHeader';

const RepoIssues = () => {
  const params = useParams();

  const clearSortAndFilter = () => {
    setSortBy('Newest');
    setSelectedLabel(undefined);
    setSelectedMilestone(undefined);
  };

  console.log(issuesStore());
  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      {(selectedLabel() || sortBy() !== 'Newest') && (
        <div
          class="flex items-center gap-2 text-sm my-4 ml-2 cursor-pointer"
          onClick={clearSortAndFilter}
        >
          <span class="text-white rounded-md bg-gray-500 w-4 h-4">
            <CloseIcon />
          </span>
          Clear filter
        </div>
      )}
      <PRAndIssuesData />

      {activeTab() === 'open'
        ? (issuesStore()?.openIssues?.pageInfo?.hasNextPage ||
            issuesStore()?.openIssues?.pageInfo?.hasPreviousPage) && (
            <Pagination
              tab={activeTab()}
              pageInfo={issuesStore()?.openIssues?.pageInfo}
              owner={`${params.owner}/${params.name}/issues`}
            />
          )
        : (issuesStore()?.closedIssues?.pageInfo?.hasNextPage ||
            issuesStore()?.closedIssues?.pageInfo?.hasPreviousPage) && (
            <Pagination
              tab={activeTab()}
              pageInfo={issuesStore()?.closedIssues?.pageInfo}
              owner={`${params.owner}/${params.name}/issues`}
            />
          )}
    </div>
  );
};

export default RepoIssues;
