import { createResource, createSignal, createEffect } from 'solid-js';
import getRepoPullRequests from "../../services/get-repo-pull-requests";
import { useParams } from '@solidjs/router';
import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';

const RepoPullRequests = () => {
  const params = useParams();

  const [pulls, setPulls] = createSignal([]);

  const [resp] = createResource(() => getRepoPullRequests({owner: params.owner, name: params.name}));

  createEffect(() => {
    if (resp() && !resp.loading) {
      // TO BE FIXED: for now I'm passing only the open PRs to the page, whenever the header of the table will be 
      // implemented and added to PRAndIssuesData component, we must pass all prs here and then inside the component 
      // decide what prs show (open or closed)
      setPulls(resp().openPullRequests.pullRequests);
    }
  });

    return (
      <div class="md:py-12 max-w-screen-xl mx-auto">
        {resp.loading ? (
          <div>Loading...</div>
        ) : (
          <PRAndIssuesData pulls={pulls()}/>
        )}
      </div>
    );
  };
  
  export default RepoPullRequests;