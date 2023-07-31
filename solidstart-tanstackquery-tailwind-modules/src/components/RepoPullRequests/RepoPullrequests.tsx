import { useParams } from '@solidjs/router';
import PRAndIssuesData from '../PRAndIssuesData';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination';
import PRAndIssuesHeader from '../PRAndIssuesHeader';
import { Match, Show, Switch } from 'solid-js';
import { pullRequests } from '../../routes/[owner]/[name]/pulls';
import {
  activeTab,
  selectedLabel,
  setSelectedLabel,
  setSelectedMilestone,
  setSortBy,
  sortBy,
} from '~/store';

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
          openItems={pullRequests().openPullRequests.pullRequests}
          closedItems={pullRequests().closedPullRequests.pullRequests}
        />
      </div>
      <Show when={activeTab() === 'OPEN'}>
        <Switch>
          <Match
            when={
              pullRequests().openPullRequests?.pageInfo?.hasNextPage ||
              pullRequests().openPullRequests?.pageInfo?.hasPreviousPage
            }
          >
            <Pagination
              tab={activeTab()}
              pageInfo={pullRequests().openPullRequests.pageInfo}
              owner={`${params.owner}/${params.name}/issues`}
            />
          </Match>
        </Switch>
      </Show>
      <Show when={activeTab() !== 'OPEN'}>
        <Switch>
          <Match
            when={
              pullRequests().closedPullRequests?.pageInfo?.hasNextPage ||
              pullRequests().closedPullRequests?.pageInfo?.hasPreviousPage
            }
          >
            <Pagination
              tab={activeTab()}
              pageInfo={pullRequests().closedPullRequests.pageInfo}
              owner={`${params.owner}/${params.name}/pulls`}
            />
          </Match>
        </Switch>
      </Show>
    </div>
  );
};

export default RepoPullRequests;
