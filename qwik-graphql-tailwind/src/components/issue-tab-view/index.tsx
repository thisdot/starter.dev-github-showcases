import { isBrowser } from '@builder.io/qwik/build';
import { useLocation } from '@builder.io/qwik-city';
import { component$, useClientEffect$, useContext, useTask$ } from '@builder.io/qwik';

import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { Pagination } from '../pagination/pagination';
import IssuesData from './issues-data';

import { labelOptions, milestonesOptions, sortOptions } from './data';

import { useQuery } from '~/utils';
import { ISSUES_QUERY } from '~/utils/queries/issues-query';
import IssuesPRContext, { IssuesPRContextProps } from '~/context/issue-pr-store';
import { AUTH_TOKEN, GITHUB_GRAPHQL, DEFAULT_PAGE_SIZE } from '~/utils/constants';
import DropdownContext from '~/context/issue-tab-header-dropdown';

import { IssueOrderField, OrderDirection } from './type';

export interface IssuesProps {
  owner: string;
  name: string;
}

interface IssuesQueryParams {
  owner: string;
  name: string;
  first: number;
  after?: string;
  before?: string;
  orderBy: string;
  direction: string;
}

export const IssueTabView = component$(({ owner, name }: IssuesProps) => {
  const location = useLocation();
  const issuesStore = useContext(IssuesPRContext);
  const dropdownStore = useContext(DropdownContext);

  const afterCursor = typeof location.query.after === 'string' ? location.query.after : undefined;
  const beforeCursor = typeof location.query.before === 'string' ? location.query.before : undefined;

  useClientEffect$(async () => {
    const abortController = new AbortController();
    issuesStore.loading = true;
    const response = await fetchRepoIssues(
      {
        owner,
        name,
        after: afterCursor,
        before: beforeCursor,
        first: DEFAULT_PAGE_SIZE,
        orderBy: IssueOrderField.CreatedAt,
        direction: OrderDirection.Desc,
      },
      abortController
    );

    updateIssueState(issuesStore, response);
  });

  useTask$(async ({ track }) => {
    const abortController = new AbortController();
    issuesStore.loading = true;
    const after = track(() => location.query.after);
    const before = track(() => location.query.before);
    track(() => issuesStore.activeTab);
    track(() => dropdownStore.selectedSort);

    if (isBrowser) {
      const response = await fetchRepoIssues(
        {
          owner,
          name,
          after,
          before,
          first: DEFAULT_PAGE_SIZE,
          orderBy: dropdownStore.selectedSort.split('^')[0],
          direction: dropdownStore.selectedSort.split('^')[1],
        },
        abortController
      );

      updateIssueState(issuesStore, response);
    }
  });

  return (
    <>
      <div class="border border-gray-300 rounded-lg">
        <PullRequestIssueTab
          tabType="issue"
          sortOption={sortOptions}
          labelOption={labelOptions}
          milestonesOption={milestonesOptions}
          openCount={issuesStore.openIssuesCount}
          closedCount={issuesStore.closedIssuesCount}
        />
        {issuesStore.loading && (
          <div class="animate-pulse p-3 flex flex-col gap-2">
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
          </div>
        )}
        <IssuesData issues={issuesStore.activeTab === 'open' ? issuesStore.openIssues : issuesStore.closedIssues} />
      </div>
      {(issuesStore.openPageInfo?.hasNextPage ||
        issuesStore.openPageInfo?.hasPreviousPage ||
        issuesStore.closedPageInfo?.hasNextPage ||
        issuesStore.closedPageInfo?.hasPreviousPage) && (
        <Pagination
          tab={issuesStore.activeTab}
          pageInfo={issuesStore.activeTab ? issuesStore.openPageInfo : issuesStore.closedPageInfo}
          owner={`${owner}/${name}/issues`}
        />
      )}
    </>
  );
});

export function updateIssueState(store: IssuesPRContextProps, response: any) {
  const { closedIssues, openIssues } = response.data.repository;
  store.closedIssues = closedIssues.nodes;
  store.openIssues = openIssues.nodes;
  store.closedIssuesCount = closedIssues.totalCount;
  store.openIssuesCount = openIssues.totalCount;
  store.openPageInfo = openIssues.pageInfo;
  store.closedPageInfo = closedIssues.pageInfo;
  store.loading = false;
}

export async function fetchRepoIssues(
  { owner, name, first, after, before, orderBy, direction }: IssuesQueryParams,
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
      after,
      before,
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
