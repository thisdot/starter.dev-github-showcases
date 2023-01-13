import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import PullRequestsTabView from '~/components/repo-pulls';
import { sortOptions } from '~/components/repo-pulls/data';
import DropdownContext, { DropdownStoresProps } from '~/context/issue-tab-header-dropdown';
import PullRequestContext, { PullRequestContextProps } from '~/context/pull-request-store';

export default component$(() => {
  const location = useLocation();
  const store = useStore<PullRequestContextProps>(
    {
      activeTab: (location.query.tab || 'open') as any,
      closedPullRequest: [],
      openPullRequest: [],
      closedPullRequestCount: 0,
      openPullRequestCount: 0,
      pullRequestLabels: [],
      loading: true,
      openPageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
      closedPageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
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

  useContextProvider(PullRequestContext, store);
  useContextProvider(DropdownContext, dropdownStore);

  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      <PullRequestsTabView name={location.params.name} owner={location.params.owner} />
    </div>
  );
});
