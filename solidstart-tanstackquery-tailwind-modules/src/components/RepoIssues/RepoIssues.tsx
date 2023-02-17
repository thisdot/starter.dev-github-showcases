import { createResource, createSignal, createEffect } from 'solid-js';
import { useLocation, useParams } from '@solidjs/router';
import PRAndIssuesData from '../PRAndIssuesData/PRAndIssuesData';
import { usePrAndIssuesContext } from '../../contexts/PrAndIssuesContext';
import { parseSortParams } from './utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../utils/constants';
import getIssues from '../../services/get-issues';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination';
import { PRAndIssueLoaderSkeleton } from '../PRAndIssueLoaderSkeleton';

const RepoIssues = () => {
  const params = useParams();
  const location = useLocation();
  const prAndIssueContext = usePrAndIssuesContext();

  const [data, setData] = createSignal([]);
  const [openCount, setOpenCount] = createSignal();
  const [closedCount, setClosedCount] = createSignal();
  const [pageInfo, setPageInfo] = createSignal();

  const fetchParameters = () => ({
    owner: params.owner,
    name: params.name,
    orderBy: parseSortParams(SORT_OPTIONS, prAndIssueContext.sortBy(), 0),
    direction: parseSortParams(SORT_OPTIONS, prAndIssueContext.sortBy(), 1),
    filterBy: {
      labels: prAndIssueContext.selectedLabel()
        ? [prAndIssueContext.selectedLabel()]
        : undefined,
      milestone: prAndIssueContext.selectedMilestone()
        ? prAndIssueContext.milestoneId()
        : undefined,
    },
    before:
      typeof location.query.before === 'string'
        ? location.query.before
        : undefined,
    after:
      typeof location.query.after === 'string'
        ? location.query.after
        : undefined,
    first:
      location.query.after || !location.query.before
        ? DEFAULT_PAGE_SIZE
        : undefined,
    last: location.query.before ? DEFAULT_PAGE_SIZE : undefined,
  });

  const [resp] = createResource(fetchParameters, () =>
    getIssues(fetchParameters())
  );

  // createEffect(() => {
  //   if (resp() && !resp.loading) {
  //     setLabelOpt(resp()?.labels);
  //     setMilestoneOpt(resp().milestones);
  //     setOpenCount(resp().openIssues.totalCount);
  //     setClosedCount(resp().closedIssues.totalCount);
  //     setPageInfo(
  //       resp()[tabActive() === 'open' ? 'openIssues' : 'closedIssues'].pageInfo
  //     );
  //     setData(
  //       resp()[tabActive() === 'open' ? 'openIssues' : 'closedIssues'].issues
  //     );
  //   }
  // });

  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      {resp.loading ? (
        <PRAndIssueLoaderSkeleton />
      ) : (
        <>
          {(prAndIssueContext.selectedLabel() ||
            prAndIssueContext.sortBy() !== 'Newest') && (
            <div
              class="flex items-center gap-2 text-sm my-4 ml-2 cursor-pointer"
              onClick={clearSortAndFilter}
            >
              <span class="text-white rounded-md bg-gray-500 w-4 h-4">
                <CloseIcon />
              </span>
              Clear filter
            </div>
          )}
          <PRAndIssuesData
            data={data()}
            openCount={openCount()}
            closedCount={closedCount()}
          />
          {/* {pageInfo() &&
            (pageInfo().hasNextPage || pageInfo().hasPreviousPage) && (
              <Pagination
                tab={tabActive()}
                pageInfo={pageInfo()}
                owner={`${params.owner}/${params.name}/issues`}
              />
            )} */}
        </>
      )}
    </div>
  );
};

export default RepoIssues;
