import { createResource, createSignal, createEffect } from 'solid-js';
import getRepoPullRequests from "../../services/get-repo-pull-requests";
import { useParams } from '@solidjs/router';
import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';

const RepoPullRequests = () => {
  const params = useParams();

  const [pulls, setPulls] = createSignal([]);
  const [openCount, setOpenCount] = createSignal();
  const [closedCount, setClosedCount] = createSignal();
  const [tabActive, setActiveTab] = createSignal('open');

  const [resp] = createResource(() => getRepoPullRequests({owner: params.owner, name: params.name}));

  createEffect(() => {
    if (resp() && !resp.loading) {
      setOpenCount(resp().openPullRequests.totalCount)
      setClosedCount(resp().closedPullRequests.totalCount)
      setPulls(tabActive() === 'open' ? resp().openPullRequests.pullRequests : resp().closedPullRequests.pullRequests);
    }
  });

    return (
      <div class="md:py-12 max-w-screen-xl mx-auto">
        {resp.loading ? (
          <div>Loading...</div>
        ) : (
          <PRAndIssuesData 
            pulls={pulls()} 
            tabActive={tabActive()} 
            setActiveTab={setActiveTab} 
            openCount={openCount()}
            closedCount={closedCount()}
          />
        )}
      </div>
    );
  };
  
  export default RepoPullRequests;