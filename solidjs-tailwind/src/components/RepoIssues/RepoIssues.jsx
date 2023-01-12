import { createResource, createSignal, createEffect } from 'solid-js';
import { useParams } from '@solidjs/router';
import { PRAndIssuesData } from '../PRAndIssuesData/PRAndIssuesData';
import getIssues from '../../services/get-issues';

const RepoIssues = () => {
  const params = useParams();

  const [data, setData] = createSignal([]);
  const [openCount, setOpenCount] = createSignal();
  const [closedCount, setClosedCount] = createSignal();
  const [tabActive, setActiveTab] = createSignal('open');

  const [resp] = createResource(() => getIssues({owner: params.owner, name: params.name}));

  createEffect(() => {
    if (resp() && !resp.loading) {
      setOpenCount(resp().openIssues.totalCount)
      setClosedCount(resp().closedIssues.totalCount)
      setData(tabActive() === 'open' ? resp().openIssues.issues : resp().closedIssues.issues);
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
          />
        )}
      </div>
    );
  };

  export default RepoIssues;
