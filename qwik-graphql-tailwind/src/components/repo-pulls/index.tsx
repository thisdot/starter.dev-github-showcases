import { component$, useClientEffect$, useContextProvider, useStore } from '@builder.io/qwik';
import DropdownStores, { DropdownStoresProps } from '../../context/issue-tab-header-dropdown';
import issuesPRStore, { IssuesPRStoreProps, Tabs } from '../../context/issue-pr-store';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { labelOptions, milestonesOptions, sortOptions } from './data';
import { ChevronDownIcon } from '../icons';
import { useQuery } from '../../utils';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '../../utils/constants';
import PullRequestData from './repo-pulls-data';
import { PullRequest } from './types';
import { PULL_REQUEST_QUERY } from '../../utils/queries/pull-request';

export interface PullRequestsProps {
  activeTab: Tabs;
  owner: string;
  name: string;
}

export interface DropdownStores {
  selectedLabel: string;
  selectedSort: string;
  selectedMilestones: string;
}

interface PullRequestsQueryParams {
  owner: string;
  name: string;
  first: number;
}

interface PullRequestStore {
  closedPullRequest: PullRequest[];
  openPullRequest: PullRequest[];
  loading: boolean;
}

export default component$(({ activeTab, owner, name }: PullRequestsProps) => {
  const DEFAULT_TAB = 'open';
  const store = useStore<IssuesPRStoreProps>({
    activeTab: activeTab,
  });
  const dropdownStore = useStore<DropdownStoresProps>({
    selectedLabel: labelOptions[0].value,
    selectedSort: sortOptions[0].value,
    selectedMilestones: milestonesOptions[0].value,
  });

  const pullRequestStore = useStore<PullRequestStore>({
    closedPullRequest: [],
    openPullRequest: [],
    loading: true,
  });

  useContextProvider(issuesPRStore, store);
  useContextProvider(DropdownStores, dropdownStore);

  useClientEffect$(async () => {
    const abortController = new AbortController();
    pullRequestStore.loading = true;
    const response = await fetchRepoPullRequests(
      {
        owner,
        name,
        first: 10,
      },
      abortController
    );

    updatePullRequestState(pullRequestStore, response);
  });

  return (
    <>
      <div className="border border-gray-300 rounded-lg">
        <PullRequestIssueTab
          openCount={pullRequestStore.openPullRequest.length}
          closedCount={pullRequestStore.closedPullRequest.length}
          tabType="pr"
          milestonesOption={milestonesOptions}
          labelOption={labelOptions}
          sortOption={sortOptions}
        />
        {pullRequestStore.loading && (
          <div className=" animate-pulse p-3 flex flex-col gap-2">
            <div className="w-full h-4 rounded-md bg-gray-200"></div>
            <div className="w-full h-4 rounded-md bg-gray-200"></div>
            <div className="w-full h-4 rounded-md bg-gray-200"></div>
          </div>
        )}
        <PullRequestData
          pull_request={
            store.activeTab === DEFAULT_TAB ? pullRequestStore.openPullRequest : pullRequestStore.closedPullRequest
          }
        />
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

export function updatePullRequestState(store: PullRequestStore, response: any) {
  const { closedPullRequest, openPullRequest } = response.data.repository;
  store.closedPullRequest = closedPullRequest.nodes;
  store.openPullRequest = openPullRequest.nodes;
  store.loading = false;
}
export async function fetchRepoPullRequests(
  { owner, name, first }: PullRequestsQueryParams,
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
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
