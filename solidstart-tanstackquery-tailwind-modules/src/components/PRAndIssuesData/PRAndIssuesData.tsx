import { For, Show } from 'solid-js';
import PRAndIssuesListItem from '../PRAndIssuesListItem';
import { activeTab } from '../PRAndIssuesHeader';
import { Issue } from '~/types/issues-type';
import { PullRequest } from '~/types/pull-request-type';

interface PRAndIssuesDataProps {
  type: 'pr' | 'issue';
  openItems: Issue[] | PullRequest[];
  closedItems: Issue[] | PullRequest[];
}

const PRAndIssuesData = (props: PRAndIssuesDataProps) => {
  return (
    <>
      <For each={activeTab() === 'OPEN' ? props.openItems : props.closedItems}>
        {(item) => <PRAndIssuesListItem item={item} type={props.type} />}
      </For>

      <Show
        when={
          (activeTab() === 'OPEN' && props.openItems.length === 0) ||
          (activeTab() === 'CLOSED' && props.closedItems.length === 0)
        }
      >
        <div class="text-center p-3 flex flex-col items-center justify-center">
          <span class="font-bold mb-4">No results matched your search.</span>
          <a class=" text-blue-600 underline" href={location.pathname}>
            Clear Filters
          </a>
        </div>
      </Show>
    </>
  );
};

export default PRAndIssuesData;
