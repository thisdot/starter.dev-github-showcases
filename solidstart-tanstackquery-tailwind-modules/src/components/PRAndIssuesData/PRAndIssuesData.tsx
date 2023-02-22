import { For } from 'solid-js';
import PRAndIssuesListItem from '../PRAndIssuesListItem';
import PRAndIssuesHeader from '../PRAndIssuesHeader';
import { issuesStore } from '~/stores/issues-store';

const PRAndIssuesData = () => {
  return (
    <div class="border border-gray-300 rounded-lg">
      <PRAndIssuesHeader />
      {issuesStore().openIssues.totalCount > 0 ? (
        <For each={issuesStore()?.openIssues.issues}>
          {(issue) => <PRAndIssuesListItem {...issue} />}
        </For>
      ) : (
        <div class="text-center p-3 flex flex-col items-center justify-center">
          <span class="font-bold mb-4">No results matched your search.</span>
          <a class=" text-blue-600 underline" href={location.pathname}>
            Refresh
          </a>
        </div>
      )}
    </div>
  );
};

export default PRAndIssuesData;
