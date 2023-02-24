import { For, Show } from 'solid-js';
import PRAndIssuesListItem from '../PRAndIssuesListItem';
import PRAndIssuesHeader, { activeTab } from '../PRAndIssuesHeader';
import { issuesStore } from '~/stores/issues-store';

const PRAndIssuesData = () => {
  return (
    <div class="border border-gray-300 rounded-lg">
      <PRAndIssuesHeader />

      <For
        each={
          activeTab() === 'OPEN'
            ? issuesStore().openIssues.issues
            : issuesStore().closedIssues.issues
        }
      >
        {(issue) => <PRAndIssuesListItem {...issue} />}
      </For>

      <Show
        when={
          (activeTab() === 'OPEN' &&
            issuesStore().openIssues.issues.length === 0) ||
          (activeTab() === 'CLOSED' &&
            issuesStore().closedIssues.issues.length === 0)
        }
      >
        <div class="text-center p-3 flex flex-col items-center justify-center">
          <span class="font-bold mb-4">No results matched your search.</span>
          <a class=" text-blue-600 underline" href={location.pathname}>
            Refresh
          </a>
        </div>
      </Show>
    </div>
  );
};

export default PRAndIssuesData;
