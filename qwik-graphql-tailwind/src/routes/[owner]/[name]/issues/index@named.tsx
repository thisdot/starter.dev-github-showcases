import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { IssueTabView } from '~/components/issue-tab-view';
import { sortOptions } from '~/components/repo-pulls/data';
import IssuesPRContext, { IssuesPRContextProps } from '~/context/issue-pr-store';
import DropdownStores, { DropdownStoresProps } from '~/context/issue-tab-header-dropdown';

export default component$(() => {
  const location = useLocation();
  const store = useStore<IssuesPRContextProps>(
    {
      activeTab: (location.query.tab || 'open') as any,
      closedIssues: [],
      openIssues: [],
      closedIssuesCount: 0,
      openIssuesCount: 0,
      loading: true,
      openPageInfo: {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
      },
      closedPageInfo: {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
      },
    },
    { recursive: true }
  );

  const dropdownStore = useStore<DropdownStoresProps>(
    {
      selectedSort: sortOptions[0].value,
    },
    { recursive: true }
  );

  useContextProvider(IssuesPRContext, store);
  useContextProvider(DropdownStores, dropdownStore);
  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      <IssueTabView name={location.params.name} owner={location.params.owner} />
    </div>
  );
});
