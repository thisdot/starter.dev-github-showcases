import { createResource, createSignal, createEffect } from 'solid-js';
import getRepoPullRequests from "../../services/get-repo-pull-requests";
import { useParams } from '@solidjs/router';
import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';
import {SORT_OPTIONS} from '../PRAndIssuesHeader/data'
import { parseSortParams } from './utils';


const RepoPullRequests = () => {
  const params = useParams();

  const [data, setData] = createSignal([]);
  const [openCount, setOpenCount] = createSignal();
  const [closedCount, setClosedCount] = createSignal();
  const [tabActive, setActiveTab] = createSignal('open');
  const [sortBy, setSortBy] = createSignal('Newest');
  const [selectedLabel, setSelectedLabel] = createSignal(undefined);
  const [labelOpt, setLabelOpt] = createSignal([]);

  const fetchParameters = () => ({
        owner: params.owner, 
        name: params.name, 
        orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0), 
        direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
        labels: selectedLabel() ? [selectedLabel()] : undefined
  })

  const [resp] = createResource(fetchParameters, () => 
     getRepoPullRequests(fetchParameters())
    );

  createEffect(() => {
    if (resp() && !resp.loading) {
      setLabelOpt(resp().labels)
      setOpenCount(resp().openPullRequests.totalCount)
      setClosedCount(resp().closedPullRequests.totalCount)
      setData(resp()[tabActive() === 'open' ? 'openPullRequests' : 'closedPullRequests'].pullRequests);
    }
  });

    return (
      <div class="md:py-12 max-w-screen-xl mx-auto">
        {resp.loading ? (
          <div>Loading...</div>
        ) : (
          <PRAndIssuesData 
            data={data()} 
            tabActive={tabActive()} 
            setActiveTab={setActiveTab} 
            openCount={openCount()}
            closedCount={closedCount()}
            sortBy={sortBy()}
            setSortBy={setSortBy}
            labelOpt={labelOpt()}
            selectedLabel={selectedLabel()}
            setSelectedLabel={setSelectedLabel}
          />
        )}
      </div>
    );
  };
  
  export default RepoPullRequests;