import { $, component$, useClientEffect$, useContextProvider, useStore, useTask$ } from '@builder.io/qwik';
import DropdownStores, { DropdownStoresProps } from '../../context/issue-tab-header-dropdown';
import issuesPRStore, { IssuesPRStoreProps, Tabs } from '../../context/issue-pr-store';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { sortOptions } from './data';
import { ChevronDownIcon } from '../icons';
import { useQuery } from '../../utils';
import { AUTH_TOKEN, DEFAULT_PAGE_SIZE, GITHUB_GRAPHQL } from '../../utils/constants';
import PullRequestData from './repo-pulls-data';
import { PullRequest, PullRequestOrderField, OrderDirection, ParsedPullRequestQuery, Label } from './types';
import { PULL_REQUEST_QUERY } from '../../utils/queries/pull-request';
import { isBrowser } from '@builder.io/qwik/build';
import { parseQuery } from './parseQuery';
import { ClearFilterAndSortBtn } from '../clear-filter-and-sort-button';

export interface PullRequestsProps {
  activeTab: Tabs;
  owner: string;
  name: string;
}

export interface DropdownStores {
  selectedLabel: string;
  selectedSort: string;
}

interface PullRequestsQueryParams {
  owner: string;
  name: string;
  first: number;
  labels?: string[];
  orderBy: string;
  direction: string;
}

interface PullRequestStore {
  closedPullRequest: PullRequest[];
  openPullRequest: PullRequest[];
  pullRequestLabels: { value: string; label: string }[];
  closedPullRequestCount: number;
  openPullRequestCount: number;
  loading: boolean;
}

export default component$(({ activeTab, owner, name }: PullRequestsProps) => {
  const DEFAULT_TAB = 'open';

  const store = useStore<IssuesPRStoreProps>({
    activeTab: activeTab,
  });

  const dropdownStore = useStore<DropdownStoresProps>({
    selectedLabel: undefined,
    selectedSort: sortOptions[0].value,
  });

  const pullRequestStore = useStore<PullRequestStore>({
    closedPullRequest: [],
    closedPullRequestCount: 0,
    openPullRequestCount: 0,
    pullRequestLabels: [],
    openPullRequest: [],
    loading: true,
  });

  useContextProvider(issuesPRStore, store);
  useContextProvider(DropdownStores, dropdownStore);

  const hasActiveFilter =
    dropdownStore.selectedLabel !== undefined || dropdownStore.selectedSort !== sortOptions[0].value;

  const resetFilters$ = $(() => {
    dropdownStore.selectedLabel = undefined;
    dropdownStore.selectedSort = sortOptions[0].value;
  });

  useClientEffect$(async () => {
    const abortController = new AbortController();
    pullRequestStore.loading = true;
    const response = await fetchRepoPullRequests(
      {
        owner,
        name,
        first: DEFAULT_PAGE_SIZE,
        labels: dropdownStore.selectedLabel ? [dropdownStore.selectedLabel] : undefined,
        orderBy: PullRequestOrderField.CreatedAt,
        direction: OrderDirection.Desc,
      },
      abortController
    );

    updatePullRequestState(pullRequestStore, parseQuery(response));
  });

  useTask$(async ({ track }) => {
    const abortController = new AbortController();
    track(() => store.activeTab);
    track(() => dropdownStore.selectedSort);
    track(() => dropdownStore.selectedLabel);

    // fetchRepoPullRequests needs auth token.
    // Because we store auth token in sessionStorage we need to be sure that the storage is defined.
    // We ask to the useTask to do the following operation only in browser,
    // where we are sure that sessionStorage is not undefined.
    if (isBrowser) {
      const response = await fetchRepoPullRequests(
        {
          owner,
          name,
          first: DEFAULT_PAGE_SIZE,
          labels: dropdownStore.selectedLabel ? [dropdownStore.selectedLabel] : undefined,
          orderBy: dropdownStore.selectedSort.split('^')[0],
          direction: dropdownStore.selectedSort.split('^')[1],
        },
        abortController
      );
      console.log(parseQuery(response));
      updatePullRequestState(pullRequestStore, parseQuery(response));
    }
  });

  return (
    <>
      {hasActiveFilter && (
        <div class="mb-2 pl-2">
          <ClearFilterAndSortBtn clearFn={resetFilters$} />
        </div>
      )}
      <div class="border border-gray-300 rounded-lg">
        <PullRequestIssueTab
          openCount={pullRequestStore.openPullRequestCount}
          closedCount={pullRequestStore.closedPullRequestCount}
          tabType="pr"
          labelOption={pullRequestStore.pullRequestLabels}
          sortOption={sortOptions}
        />
        {pullRequestStore.loading && (
          <div class=" animate-pulse p-3 flex flex-col gap-2">
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
          </div>
        )}
        <PullRequestData
          pull_request={
            store.activeTab === DEFAULT_TAB ? pullRequestStore.openPullRequest : pullRequestStore.closedPullRequest
          }
        />
      </div>
      <div class="flex items-center justify-center gap-4 mt-5">
        <button class="flex items-center gap-1 text-base">
          <ChevronDownIcon className="rotate-90 w-3 h-3 translate-y-[0.1rem]" />
          Prev
        </button>
        <button class="flex items-baseline gap-1 text-sm">
          Next
          <ChevronDownIcon className="-rotate-90 w-3 h-3 translate-y-[0.1rem]" />
        </button>
      </div>
    </>
  );
});

export function updatePullRequestState(store: PullRequestStore, response: ParsedPullRequestQuery) {
  const { closedPullRequests, openPullRequests, labels } = response;
  store.closedPullRequest = closedPullRequests.pullRequests;
  store.openPullRequest = openPullRequests.pullRequests;
  store.closedPullRequestCount = closedPullRequests.totalCount;
  store.openPullRequestCount = openPullRequests.totalCount;
  store.pullRequestLabels = labels.map((lab: Label) => ({ label: lab.name, value: lab.name }));
  store.loading = false;
}

export async function fetchRepoPullRequests(
  { owner, name, first, labels, orderBy, direction }: PullRequestsQueryParams,
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(PULL_REQUEST_QUERY);
  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: {
      owner,
      name,
      first,
      labels,
      orderBy,
      direction,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
