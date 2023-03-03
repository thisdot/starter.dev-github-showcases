import { batch, createEffect, createResource, on, Show } from 'solid-js';
import { useParams, useSearchParams } from '@solidjs/router';

import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';
import { usePrAndIssuesContext } from '../../contexts/PrAndIssuesContext';
import { parseSortParams } from './utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../utils/constants';
import getIssues from '../../services/get-issues';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination';
import { PRAndIssueLoaderSkeleton } from '../PRAndIssueLoaderSkeleton';
import { createStore } from 'solid-js/store';

const RepoIssues = () => {
  const params = useParams();
  const [query] = useSearchParams();
  const {
    tabActive,
    sortBy,
    selectedLabel,
    setLabelOpt,
    setMilestoneOpt,
    clearSortAndFilter,
    selectedMilestone,
    milestoneId,
  } = usePrAndIssuesContext();

  const fetchParameters = () => ({
    owner: params.owner,
    name: params.name,
    orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0),
    direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
    filterBy: {
      labels: selectedLabel() ? [selectedLabel()] : undefined,
      milestone: selectedMilestone() ? milestoneId() : undefined,
    },
    before: query.before,
    after: query.after,
    first: query.after || !query.before ? DEFAULT_PAGE_SIZE : undefined,
    last: query.before ? DEFAULT_PAGE_SIZE : undefined,
  });

  const [repo] = createResource(fetchParameters, getIssues, {
    storage() {
      const [store, setStore] = createStore({
        labels: [],
        milestones: [],
        get type() {
          return tabActive() === 'open' ? 'openIssues' : 'closedIssues';
        },
        get issues() {
          return this[this.type].issues;
        },
        get pageInfo() {
          return this[this.type].pageInfo;
        },
      });
      return [() => store, setStore];
    },
  });

  createEffect(
    on(
      () => [repo().labels, repo().milestones],
      () =>
        batch(() => {
          setLabelOpt(repo().labels);
          setMilestoneOpt(repo().milestones);
        }),
      { defer: true }
    )
  );

  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      <Show when={!repo.loading} fallback={<PRAndIssueLoaderSkeleton />}>
        <Show when={selectedLabel() || sortBy() !== 'Newest'}>
          <button
            type="button"
            class="flex items-center gap-2 text-sm my-4 ml-2 cursor-pointer"
            onClick={clearSortAndFilter}
          >
            <span class="text-white rounded-md bg-gray-500 w-4 h-4">
              <CloseIcon />
            </span>
            Clear filter
          </button>
        </Show>

        <PRAndIssuesData
          data={repo().issues}
          openCount={repo().openIssues.totalCount}
          closedCount={repo().closedIssues.totalCount}
        />

        <Show
          when={repo().pageInfo.hasNextPage || repo().pageInfo.hasPreviousPage}
        >
          <Pagination pageInfo={repo().pageInfo} />
        </Show>
      </Show>
    </div>
  );
};

export default RepoIssues;
