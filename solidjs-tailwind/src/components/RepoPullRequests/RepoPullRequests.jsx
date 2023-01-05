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
      setPulls(resp().openPullRequests.pullRequests);
    }
  });

    return (
      <>
        {resp.loading ? (
          <div>Loading...</div>
        ) : (
          <PRAndIssuesData pulls={pulls()}/>
        )}
      </>
    );
  };
  
  export default RepoPullRequests;