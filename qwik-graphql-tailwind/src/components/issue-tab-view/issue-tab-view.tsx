import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import DropdownStores, { DropdownStoresProps } from '../../context/issue-tab-header-dropdown';
import issuesPRStore, { IssuesPRStoreProps } from '../../context/issue-pr-store';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { labelOptions, milestonesOptions, sortOptions } from './data';
import { ChevronDownIcon } from '../icons';

type Tabs = 'open' | 'closed';

export interface IssuesProps {
  activeTab: Tabs;
}
export interface IssuesStores {
  activeTab: Tabs;
}
export interface DropdownStores {
  selectedLabel: string;
  selectedSort: string;
  selectedMilestones: string;
}

export const IssueTabView = component$(({ activeTab }: IssuesProps) => {
  const store = useStore<IssuesPRStoreProps>({
    activeTab: activeTab,
  });
  const dropdownStore = useStore<DropdownStoresProps>({
    selectedLabel: labelOptions[0].value,
    selectedSort: sortOptions[0].value,
    selectedMilestones: milestonesOptions[0].value,
  });

  useContextProvider(issuesPRStore, store);
  useContextProvider(DropdownStores, dropdownStore);

  const testData = {
    openCount: 10,
    closedCount: 300,
    tabType: 'issue',
  };
  return (
    <>
      <div className="border border-gray-300 rounded-lg">
        <PullRequestIssueTab
          openCount={testData.openCount}
          closedCount={testData.closedCount}
          tabType="issue"
          milestonesOption={milestonesOptions}
          labelOption={labelOptions}
          sortOption={sortOptions}
        />
        {store.activeTab === 'open' ? <h2>Open</h2> : <h6>Closed</h6>}
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
        <button className="flex items-center gap-1 text-base">
          <ChevronDownIcon className="rotate-90 w-3 h-3 translate-y-[0.1rem]" />
          prev
        </button>
        <button className="flex items-baseline gap-1 text-sm">
          Next
          <ChevronDownIcon className="-rotate-90 w-3 h-3 translate-y-[0.1rem]" />
        </button>
      </div>
    </>
  );
});
