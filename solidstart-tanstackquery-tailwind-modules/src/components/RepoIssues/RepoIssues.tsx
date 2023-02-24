import { useParams } from '@solidjs/router';
import PRAndIssuesData from '../PRAndIssuesData';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination';
import { issuesStore } from '~/stores/issues-store';
import PRAndIssuesHeader, {
  activeTab,
  selectedLabel,
  setSelectedLabel,
  setSelectedMilestone,
  setSortBy,
  sortBy,
} from '../PRAndIssuesHeader';
import { Match, Show, Switch } from 'solid-js';

const RepoIssues = () => {
  const params = useParams();

  const clearSortAndFilter = () => {
    setSortBy('Newest');
    setSelectedLabel(undefined);
    setSelectedMilestone(undefined);
  };

  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      <Show when={selectedLabel() || sortBy() !== 'Newest'}>
        <div
          class="flex items-center gap-2 text-sm my-4 ml-2 cursor-pointer"
          onClick={clearSortAndFilter}
        >
          <span class="text-white rounded-md bg-gray-500 w-4 h-4">
            <CloseIcon />
          </span>
          Clear filter
        </div>
      </Show>
      <div class="border border-gray-300 rounded-lg">
        <PRAndIssuesHeader type="issue" />
        <PRAndIssuesData
          type="issue"
          openItems={issuesStore().openIssues.issues}
          closedItems={issuesStore().closedIssues.issues}
        />
      </div>

      <Show when={activeTab() === 'OPEN'}>
        <Switch>
          <Match
            when={
              issuesStore().openIssues?.pageInfo?.hasNextPage ||
              issuesStore().openIssues?.pageInfo?.hasPreviousPage
            }
          >
            <Pagination
              tab={activeTab()}
              pageInfo={issuesStore().openIssues.pageInfo}
              owner={`${params.owner}/${params.name}/issues`}
            />
          </Match>

          <Match
            when={
              issuesStore().closedIssues?.pageInfo?.hasNextPage ||
              issuesStore().closedIssues?.pageInfo?.hasPreviousPage
            }
          >
            {' '}
            <Pagination
              tab={activeTab()}
              pageInfo={issuesStore().closedIssues.pageInfo}
              owner={`${params.owner}/${params.name}/issues`}
            />
          </Match>
        </Switch>
      </Show>
    </div>
  );
};

export default RepoIssues;
