import { component$, useClientEffect$, useContextProvider, useStore } from '@builder.io/qwik';
import DropdownStores, { DropdownStoresProps } from '../../context/issue-tab-header-dropdown';
import issuesPRStore, { IssuesPRStoreProps, Tabs } from '../../context/issue-pr-store';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { labelOptions, milestonesOptions, sortOptions } from './data';
import { ChevronDownIcon } from '../icons';
import { useQuery } from '../../utils';
import { ISSUES_QUERY } from '../../utils/queries/issues-query';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '../../utils/constants';
import IssuesData from './issues-data';
import { Issue } from './type';

export interface IssuesProps {
  activeTab: Tabs;
  owner: string;
  name: string;
}

export interface DropdownStores {
  selectedLabel: string;
  selectedSort: string;
  selectedMilestones: string;
}

interface IssuesQueryParams {
  owner: string;
  name: string;
  first: number;
}

interface IssueStore {
  closedIssues: Issue[];
  openIssues: Issue[];
  loading: boolean;
}

export const IssueTabView = component$(({ activeTab, owner, name }: IssuesProps) => {
  const DEFAULT_TAB = 'open';
  const store = useStore<IssuesPRStoreProps>({
    activeTab: activeTab,
  });
  const dropdownStore = useStore<DropdownStoresProps>({
    selectedLabel: labelOptions[0].value,
    selectedSort: sortOptions[0].value,
    selectedMilestones: milestonesOptions[0].value,
  });

  const issuesStore = useStore<IssueStore>({
    closedIssues: [],
    openIssues: [],
    loading: true,
  });

  useContextProvider(issuesPRStore, store);
  useContextProvider(DropdownStores, dropdownStore);

  useClientEffect$(async () => {
    const abortController = new AbortController();
    issuesStore.loading = true;
    const response = await fetchRepoIssues(
      {
        owner,
        name,
        first: 10,
      },
      abortController
    );

    updateIssueState(issuesStore, response);
  });

  return (
    <>
      <div className="border border-gray-300 rounded-lg">
        <PullRequestIssueTab
          openCount={issuesStore.openIssues.length}
          closedCount={issuesStore.closedIssues.length}
          tabType="issue"
          milestonesOption={milestonesOptions}
          labelOption={labelOptions}
          sortOption={sortOptions}
        />
        {issuesStore.loading && (
          <div className=" animate-pulse p-3 flex flex-col gap-2">
            <div className="w-full h-4 rounded-md bg-gray-200"></div>
            <div className="w-full h-4 rounded-md bg-gray-200"></div>
            <div className="w-full h-4 rounded-md bg-gray-200"></div>
          </div>
        )}
        <IssuesData issues={store.activeTab === DEFAULT_TAB ? issuesStore.openIssues : issuesStore.closedIssues} />
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

export function updateIssueState(store: IssueStore, response: any) {
  const { closedIssues, openIssues } = response.data.repository;
  store.closedIssues = closedIssues.nodes;
  store.openIssues = openIssues.nodes;
  store.loading = false;
}
export async function fetchRepoIssues(
  { owner, name, first }: IssuesQueryParams,
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(ISSUES_QUERY);
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
