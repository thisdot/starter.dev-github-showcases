import { component$, useContextProvider, useStore, Slot } from '@builder.io/qwik';
import issuesPRStore from '../../context/issue-pr-store';
import DropdownStores from '../../context/issue-tab-header-dropdown';
import { labelOptions, milestonesOptions, sortOptions } from '../issue-tab-view/data';

type Tabs = 'open' | 'closed';

export interface Issues {
  activeTab: Tabs;
}
export const PRIssueContextProvider = component$(({ activeTab }: Issues) => {
  const store = useStore({
    activeTab: activeTab,
  });
  useContextProvider(issuesPRStore, store);

  const dropdownStore = useStore({
    selectedLabel: labelOptions[0].value,
    selectedSort: sortOptions[0].value,
    selectedMilestones: milestonesOptions[0].value,
  });

  useContextProvider(issuesPRStore, store);
  useContextProvider(DropdownStores, dropdownStore);

  return (
    <>
      <Slot />
    </>
  );
});
