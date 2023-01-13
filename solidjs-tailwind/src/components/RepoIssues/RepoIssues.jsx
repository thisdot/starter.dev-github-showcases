import { createResource, createSignal, createEffect } from 'solid-js';
import { useParams } from '@solidjs/router';
import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';
import { usePrAndIssuesContext } from '../../contexts/PrAndIssuesContext';
import { parseSortParams } from './utils';
import { SORT_OPTIONS } from '../../utils/constants';
import getIssues from '../../services/get-issues';
import { CloseIcon } from '../Icons';

const RepoIssues = () => {
  const params = useParams();
  const { tabActive, sortBy, selectedLabel, setLabelOpt, clearSortAndFilter } =
    usePrAndIssuesContext();

  const [data, setData] = createSignal([]);
  const [openCount, setOpenCount] = createSignal();
  const [closedCount, setClosedCount] = createSignal();

  const fetchParameters = () => ({
    owner: params.owner,
    name: params.name,
    orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0),
    direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
    labels: selectedLabel() ? [selectedLabel()] : undefined,
  });

  const [resp] = createResource(fetchParameters, () =>
    getIssues(fetchParameters())
  );

  createEffect(() => {
    if (resp() && !resp.loading) {
      setLabelOpt(resp().labels);
      setOpenCount(resp().openIssues.totalCount);
      setClosedCount(resp().closedIssues.totalCount);
      setData(
        resp()[tabActive() === 'open' ? 'openIssues' : 'closedIssues'].issues
      );
    }
  });

  return (
    <div class="md:py-12 max-w-screen-xl mx-auto">
      {resp.loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {(selectedLabel() || sortBy() !== 'Newest') && (
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
        </>
      )}
    </div>
  );
};

export default RepoIssues;
