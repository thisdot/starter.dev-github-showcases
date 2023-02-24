import { useParams } from '@solidjs/router';
import PRAndIssuesData from '../PRAndIssuesData';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination';
import { pullRequestsStore } from '~/stores/pull-requests-store';
import PRAndIssuesHeader, {
  activeTab,
  selectedLabel,
  setSelectedLabel,
  setSelectedMilestone,
  setSortBy,
  sortBy,
} from '../PRAndIssuesHeader';
import { Match, Show, Switch } from 'solid-js';

const RepoPullRequests = () => {
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
        <PRAndIssuesHeader type="pr" />
        <PRAndIssuesData
          type="pr"
          openItems={pullRequestsStore().openPullRequests.pullRequests}
          closedItems={pullRequestsStore().closedPullRequests.pullRequests}
        />
      </div>
      <Show when={activeTab() === 'OPEN'}>
        <Switch>
          <Match
            when={
              pullRequestsStore().openPullRequests?.pageInfo?.hasNextPage ||
              pullRequestsStore().openPullRequests?.pageInfo?.hasPreviousPage
            }
          >
            <Pagination
              tab={activeTab()}
              pageInfo={pullRequestsStore().openPullRequests.pageInfo}
              owner={`${params.owner}/${params.name}/issues`}
            />
          </Match>

          <Match
            when={
              pullRequestsStore().closedPullRequests?.pageInfo?.hasNextPage ||
              pullRequestsStore().closedPullRequests?.pageInfo?.hasPreviousPage
            }
          >
            {' '}
            <Pagination
              tab={activeTab()}
              pageInfo={pullRequestsStore().closedPullRequests.pageInfo}
              owner={`${params.owner}/${params.name}/pulls`}
            />
          </Match>
        </Switch>
      </Show>
    </div>
  );
};

export default RepoPullRequests;
