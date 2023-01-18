import { $, component$, useClientEffect$, useContext, useTask$ } from '@builder.io/qwik';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { sortOptions } from './data';
import { useQuery } from '../../utils';
import { ISSUES_QUERY } from '../../utils/queries/issues-query';
import { AUTH_TOKEN, DEFAULT_PAGE_SIZE, GITHUB_GRAPHQL } from '../../utils/constants';
import IssuesData from './issues-data';
import { IssueOrderField, Milestone, OrderDirection, ParsedIssueQuery } from './type';
import { isBrowser } from '@builder.io/qwik/build';
import { parseQuery } from './parseQuery';
import { Label } from '../repo-pulls/types';
import { ClearFilterAndSortBtn } from '../clear-filter-and-sort-button';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import IssuesPRContext, { IssuesPRContextProps } from '../../context/issue-pr-store';
import DropdownContext from '../../context/issue-tab-header-dropdown';
import { Pagination } from '../pagination/pagination';

export interface IssuesProps {
  owner: string;
  name: string;
}

interface IssuesQueryParams {
  owner: string;
  name: string;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  orderBy: string;
  direction: string;
  filterBy: { milestone?: string; labels: string[] | undefined };
}

export const IssueTabView = component$(({ owner, name }: IssuesProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const issuesStore = useContext(IssuesPRContext);
  const dropdownStore = useContext(DropdownContext);

  const afterCursor = typeof location.query.after === 'string' ? location.query.after : undefined;
  const beforeCursor = typeof location.query.before === 'string' ? location.query.before : undefined;

  const hasActiveFilter =
    dropdownStore.selectedLabel ||
    dropdownStore.selectedSort !== sortOptions[0].value ||
    dropdownStore.selectedMilestones !== undefined;

  const resetFilters$ = $(() => {
    dropdownStore.selectedLabel = undefined;
    dropdownStore.selectedMilestones = undefined;
    dropdownStore.selectedSort = sortOptions[0].value;
    navigate.path = `${location.pathname}?tab=${issuesStore.activeTab}`;
  });

  useClientEffect$(async () => {
    const abortController = new AbortController();
    issuesStore.loading = true;
    const response = await fetchRepoIssues(
      {
        owner,
        name,
        after: afterCursor,
        before: beforeCursor,
        first: afterCursor || !beforeCursor ? DEFAULT_PAGE_SIZE : undefined,
        last: beforeCursor ? DEFAULT_PAGE_SIZE : undefined,
        orderBy: IssueOrderField.CreatedAt,
        direction: OrderDirection.Desc,
        filterBy: {
          milestone: dropdownStore.selectedMilestones,
          labels: dropdownStore.selectedLabel ? [dropdownStore.selectedLabel] : undefined,
        },
      },
      abortController
    );

    updateIssueState(issuesStore, parseQuery(response));
  });

  useTask$(async ({ track }) => {
    const abortController = new AbortController();
    issuesStore.loading = true;
    const after = track(() => location.query.after);
    const before = track(() => location.query.before);
    track(() => issuesStore.activeTab);
    track(() => dropdownStore.selectedSort);
    track(() => dropdownStore.selectedMilestones);
    track(() => dropdownStore.selectedLabel);

    if (isBrowser) {
      const response = await fetchRepoIssues(
        {
          owner,
          name,
          after,
          before,
          first: location.query.after || !location.query.before ? DEFAULT_PAGE_SIZE : undefined,
          last: location.query.before ? DEFAULT_PAGE_SIZE : undefined,
          orderBy: dropdownStore.selectedSort.split('^')[0],
          direction: dropdownStore.selectedSort.split('^')[1],
          filterBy: {
            milestone: dropdownStore.selectedMilestones,
            labels: dropdownStore.selectedLabel ? [dropdownStore.selectedLabel] : undefined,
          },
        },
        abortController
      );

      updateIssueState(issuesStore, parseQuery(response));
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
          tabType="issue"
          milestonesOption={issuesStore.milestones}
          labelOption={issuesStore.issuesLabel}
          sortOption={sortOptions}
          openCount={issuesStore.openIssuesCount}
          closedCount={issuesStore.closedIssuesCount}
        />
        {issuesStore.loading ? (
          <div class="animate-pulse p-3 flex flex-col gap-2">
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
          </div>
        ) : (
          <IssuesData
            loading={issuesStore.loading}
            issues={issuesStore.activeTab === 'open' ? issuesStore.openIssues : issuesStore.closedIssues}
          />
        )}
      </div>
      {(issuesStore.openPageInfo?.hasNextPage ||
        issuesStore.openPageInfo?.hasPreviousPage ||
        issuesStore.closedPageInfo?.hasNextPage ||
        issuesStore.closedPageInfo?.hasPreviousPage) && (
        <Pagination
          tab={issuesStore.activeTab}
          pageInfo={issuesStore.activeTab === 'open' ? issuesStore.openPageInfo : issuesStore.closedPageInfo}
          owner={`${owner}/${name}/issues`}
        />
      )}
    </>
  );
});

export function updateIssueState(store: IssuesPRContextProps, response: ParsedIssueQuery) {
  const { closedIssues, openIssues, milestones, labels } = response;
  store.closedIssues = closedIssues.issues;
  store.openIssues = openIssues.issues;
  store.closedIssuesCount = closedIssues.totalCount;
  store.openIssuesCount = openIssues.totalCount;
  store.issuesLabel = labels.map((lab: Label) => ({ label: lab.name, value: lab.name }));
  store.milestones = milestones.map((milestone: Milestone) => ({ value: milestone.id, label: milestone.title }));
  store.openPageInfo = openIssues.pageInfo;
  store.closedPageInfo = closedIssues.pageInfo;
  store.loading = false;
}

export async function fetchRepoIssues(
  { owner, name, first, last, after, before, orderBy, direction, filterBy }: IssuesQueryParams,
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
      last,
      after,
      before,
      orderBy,
      direction,
      filterBy,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
