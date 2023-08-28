import { isBrowser } from '@builder.io/qwik/build';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { $, component$, useTask$, useContext } from '@builder.io/qwik';

import { parseQuery } from './parseQuery';
import PullRequestData from './repo-pulls-data';
import { PullRequestOrderField, OrderDirection, ParsedPullRequestQuery } from './types';

import { Pagination } from '../pagination/pagination';
import { PullRequestIssueTab } from '../pull-request-issue-tab/pull-request-issue-tab';
import { ClearFilterAndSortBtn } from '../clear-filter-and-sort-button';

import { useQuery } from '~/utils';
import { PULL_REQUEST_QUERY } from '~/utils/queries/pull-request';
import PullRequestContext, { PullRequestContextProps } from '~/context/pull-request-store';
import { AUTH_TOKEN, GITHUB_GRAPHQL, DEFAULT_PAGE_SIZE, SEARCH_PULLS } from '~/utils/constants';
import DropdownContext from '~/context/issue-tab-header-dropdown';
import { sortOptions } from './data';
import parseRestAPIPullRequests, { IPullRequestProps } from '~/utils/parseRestAPIPullRequests';

export interface PullRequestsProps {
  owner: string;
  name: string;
}

interface PullRequestsQueryParams {
  owner: string;
  name: string;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  milestone?: string;
  labels?: string[];
  orderBy: string;
  direction: string;
}

export default component$(({ owner, name }: PullRequestsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pullRequestStore = useContext(PullRequestContext);
  const dropdownStore = useContext(DropdownContext);

  const hasActiveFilter =
    dropdownStore.selectedLabel ||
    dropdownStore.selectedSort !== sortOptions[0].value ||
    dropdownStore.selectedMilestones !== undefined;

  const resetFilters$ = $(() => {
    dropdownStore.selectedLabel = undefined;
    dropdownStore.selectedSort = sortOptions[0].value;
    dropdownStore.selectedMilestones = undefined;
    dropdownStore.selectedMilestoneNumber = undefined;
    navigate.path = `${location.pathname}?tab=${pullRequestStore.activeTab}`;
  });

  useTask$(
    async ({ track }) => {
      const abortController = new AbortController();
      const after = track(() => location.query.after);
      const before = track(() => location.query.before);
      track(() => dropdownStore.selectedSort);
      track(() => dropdownStore.selectedLabel);
      track(() => dropdownStore.selectedMilestones);

      // fetchRepoPullRequests needs auth token.
      // Because we store auth token in sessionStorage we need to be sure that the storage is defined.
      // We ask to the useTask to do the following operation only in browser,
      // where we are sure that sessionStorage is not undefined.
      if (isBrowser) {
        const response = await fetchRepoPullRequests(
          {
            owner,
            name,
            after,
            before,
            first: location.query.after || !location.query.before ? DEFAULT_PAGE_SIZE : undefined,
            last: location.query.before ? DEFAULT_PAGE_SIZE : undefined,
            labels: dropdownStore.selectedLabel ? [dropdownStore.selectedLabel] : undefined,
            milestone: dropdownStore.selectedMilestones,
            orderBy: dropdownStore.selectedSort.split('^')[0] || PullRequestOrderField.CreatedAt,
            direction: dropdownStore.selectedSort.split('^')[1] || OrderDirection.Desc,
          },
          abortController
        );
        if (dropdownStore.selectedMilestones) {
          updatePullRequestState(pullRequestStore, response);
        } else {
          updatePullRequestState(pullRequestStore, parseQuery(response));
        }
      }
    },
    { eagerness: 'load' }
  );

  return (
    <>
      {hasActiveFilter && (
        <div class="mb-2 pl-2">
          <ClearFilterAndSortBtn clearFn={resetFilters$} />
        </div>
      )}
      <div class="border border-gray-300 rounded-lg">
        <PullRequestIssueTab
          tabType="pr"
          sortOption={sortOptions}
          labelOption={pullRequestStore.pullRequestLabels}
          milestonesOption={pullRequestStore.pullRequestMilestones}
          openCount={pullRequestStore.openPullRequestCount}
          closedCount={pullRequestStore.closedPullRequestCount}
        />
        {pullRequestStore.loading ? (
          <div class="animate-pulse p-3 flex flex-col gap-2">
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
            <div class="w-full h-4 rounded-md bg-gray-200"></div>
          </div>
        ) : (
          <PullRequestData
            loading={pullRequestStore.loading}
            pull_request={
              pullRequestStore.activeTab === 'open'
                ? pullRequestStore.openPullRequest
                : pullRequestStore.closedPullRequest
            }
          />
        )}
      </div>
      {(pullRequestStore.openPageInfo?.hasNextPage ||
        pullRequestStore.openPageInfo?.hasPreviousPage ||
        pullRequestStore.closedPageInfo?.hasNextPage ||
        pullRequestStore.closedPageInfo?.hasPreviousPage) && (
        <Pagination
          tab={pullRequestStore.activeTab}
          pageInfo={
            pullRequestStore.activeTab === 'open' ? pullRequestStore.openPageInfo : pullRequestStore.closedPageInfo
          }
          owner={`${owner}/${name}/pulls`}
        />
      )}
    </>
  );
});

export function updatePullRequestState(store: PullRequestContextProps, response: ParsedPullRequestQuery) {
  const { closedPullRequests, openPullRequests, labels, milestones } = response;
  store.closedPullRequest = closedPullRequests.pullRequests;
  store.openPullRequest = openPullRequests.pullRequests;
  store.closedPullRequestCount = closedPullRequests.totalCount;
  store.openPullRequestCount = openPullRequests.totalCount;
  store.pullRequestLabels = store.pullRequestLabels.length ? store.pullRequestLabels : labels;
  store.pullRequestMilestones = store.pullRequestMilestones.length ? store.pullRequestMilestones : milestones;
  store.openPageInfo = openPullRequests.pageInfo;
  store.closedPageInfo = closedPullRequests.pageInfo;
  store.loading = false;
}

export async function fetchRepoPullRequests(
  { owner, name, first, last, after, before, labels, orderBy, direction, milestone }: PullRequestsQueryParams,
  abortController?: AbortController
) {
  if (milestone) {
    //
    const { executeQuery$ } = useQuery();
    const pulls_data = {
      owner,
      name,
      labels: labels?.[0] ?? undefined,
      sort: orderBy,
      direction,
      first,
      type: 'pull-request',
      milestone,
    };
    const restOpenPullRequests = await executeQuery$({
      url: SEARCH_PULLS({
        ...pulls_data,
        state: 'open',
      }),
      headersOpt: {
        authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
      },
    });
    const restClosedPullRequests = await executeQuery$({
      url: SEARCH_PULLS({
        ...pulls_data,
        state: 'closed',
      }),
      headersOpt: {
        authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
      },
    });
    const open = (await restOpenPullRequests.json()) as IPullRequestProps;
    const closed = (await restClosedPullRequests.json()) as IPullRequestProps;
    const openPullRequests = parseRestAPIPullRequests(open);
    const closedPullRequests = parseRestAPIPullRequests(closed);

    return {
      openPullRequests,
      closedPullRequests,
    };
  } else {
    const { executeQuery$ } = useQuery(PULL_REQUEST_QUERY);
    const resp = await executeQuery$({
      signal: abortController?.signal,
      url: GITHUB_GRAPHQL,
      variables: {
        owner,
        name,
        first,
        last,
        labels,
        orderBy,
        direction,
        after,
        before,
      },
      headersOpt: {
        Accept: 'application/vnd.github+json',
        authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
      },
    });

    return await resp.json();
  }
}
