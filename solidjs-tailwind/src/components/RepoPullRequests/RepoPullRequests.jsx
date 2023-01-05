import { createResource, createSignal, createEffect } from 'solid-js';
import getRepoPullRequests from "../../services/get-repo-pull-requests";
import { useParams } from '@solidjs/router';


const RepoPullRequests = () => {
  const params = useParams();

  const [pulls, setPulls] = createSignal([]);

  const [resp] = createResource(() => getRepoPullRequests({owner: params.owner, name: params.name}));

  createEffect(() => {
    if (resp() && !resp.loading) {
      setPulls(resp().pullRequests);
    }
  });

  console.log('gino', pulls())

    return (
      <div>
          cane
      </div>
    );
  };
  
  export default RepoPullRequests;