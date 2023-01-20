import { createResource, createSignal, createEffect } from 'solid-js';
import getRepoPullRequests from "../../services/get-repo-pull-requests";
import { useParams, useLocation } from '@solidjs/router';
import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';
import { parseSortParams } from './utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../utils/constants';
import { usePrAndIssuesContext } from '../../contexts/PrAndIssuesContext';
import { CloseIcon } from '../Icons';
import { Pagination } from '../Pagination'

const RepoPullRequests = () => {
  const params = useParams();
  const location = useLocation()
  const {
    tabActive, 
    sortBy,
    selectedLabel,
    setLabelOpt,
    clearSortAndFilter,
  } = usePrAndIssuesContext()

  const [data, setData] = createSignal([]);
  const [openCount, setOpenCount] = createSignal();
  const [closedCount, setClosedCount] = createSignal();
  const [pageInfo, setPageInfo] = createSignal();


  const fetchParameters = () => ({
      owner: params.owner, 
      name: params.name, 
      orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0), 
      direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
      labels: selectedLabel() ? [selectedLabel()] : undefined,
      before: typeof location.query.before === 'string' ? location.query.before : undefined,
      after: typeof location.query.after === 'string' ? location.query.after : undefined,
      first: location.query.after || !location.query.before ? DEFAULT_PAGE_SIZE : undefined,
      last: location.query.before ? DEFAULT_PAGE_SIZE : undefined,  
  })

  const [resp] = createResource(fetchParameters, () => 
     getRepoPullRequests(fetchParameters())
    );

  createEffect(() => {
    if (resp() && !resp.loading) {
      setLabelOpt(resp().labels)
      setOpenCount(resp().openPullRequests.totalCount)
      setClosedCount(resp().closedPullRequests.totalCount)
      setPageInfo(resp()[tabActive() === 'open' ? 'openPullRequests' : 'closedPullRequests'].pageInfo)
      setData(resp()[tabActive() === 'open' ? 'openPullRequests' : 'closedPullRequests'].pullRequests);
    }
  });

    return (
      <div class="md:py-12 max-w-screen-xl mx-auto">
        {resp.loading ? (
          <div>Loading...</div>
        ) : (
          <>
          {(selectedLabel() || sortBy() !== 'Newest') && 
            <div 
              class="flex items-center gap-2 text-sm my-4 ml-2 cursor-pointer"
              onClick={clearSortAndFilter}
            >
              <span class="text-white rounded-md bg-gray-500 w-4 h-4">
                <CloseIcon />
              </span>
              Clear filter
            </div>
          }
          <PRAndIssuesData 
            data={data()} 
            openCount={openCount()}
            closedCount={closedCount()}
          />
          {
            pageInfo() && (pageInfo().hasNextPage || pageInfo().hasPreviousPage) && 
              <Pagination
                tab={tabActive()}
                pageInfo={pageInfo()}
                owner={`${params.owner}/${params.name}/pulls`}
              />
          }
        </>
      )}
    </div>
  );
};
  
  export default RepoPullRequests;
  