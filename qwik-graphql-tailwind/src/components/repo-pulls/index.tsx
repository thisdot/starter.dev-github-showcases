import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import issuesPRStore from '~/context/issue-pr-store';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';

type Tabs = 'open' | 'closed';

export interface PullRequests {
  activeTab: Tabs;
}

export default component$(({ activeTab }: PullRequests) => {
  const store = useStore<PullRequests>({
    activeTab: activeTab,
  });
  useContextProvider(issuesPRStore, store);
  const option = [
    {
      label: 'Tested',
      value: 'tested',
    },
    {
      label: 'Tested',
      value: 'tested',
    },
    {
      label: 'Tested',
      value: 'tested',
    },
  ];
  const testData = {
    openCount: 10,
    closedCount: 300,
    tabType: 'issue',
    milestonesOption: option,
    labelOption: option,
    sortOption: option,
  };

  return (
    <>
      <div className="border rounded-lg">
        <PullRequestIssueTab
          openCount={testData.openCount}
          closedCount={testData.closedCount}
          tabType="pr"
          milestonesOption={testData.milestonesOption}
          labelOption={testData.labelOption}
          sortOption={testData.sortOption}
        />
        {store.activeTab === 'open' ? <h2>Open</h2> : <h6>Closed</h6>}
      </div>
    </>
  );
});
