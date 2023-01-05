import { createResource, createSignal, createEffect } from 'solid-js';
import getRepoPullRequests from "../../services/get-repo-pull-requests";
import { useParams } from '@solidjs/router';


const RepoPullRequests = () => {
  const params = useParams();

  const [pulls, setPulls] = createSignal([]);

  const [resp] = createResource(() => getRepoPullRequests({owner: params.owner, name: params.name}));

  createEffect(() => {
    if (resp() && !resp.loading) {
      console.log('dentro', resp().openPullRequests)
      setPulls(resp().openPullRequests);
    }
  });

    return (
      <div>
         {pulls()}
      </div>
    );
  };
  
  export default RepoPullRequests;