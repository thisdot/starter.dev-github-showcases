import { useParams } from '@solidjs/router';
import {
  createSignal,
  createEffect,
  createContext,
  useContext,
  createResource,
} from 'solid-js';
import getRepoInfo from '../services/get-repo-info';
import getReadme from '../services/get-readme';
import { GITHUB_GRAPHQL } from '../utils/constants';

const RepoContext = createContext();

export function RepoProvider(props) {
  const [loading, setLoading] = createSignal(false);
  const [readme, setReadme] = createSignal(null);
  const [info, setInfo] = createSignal({});
  const params = useParams();

  const isOwnerAndNameValid =
    typeof params.owner === 'string' && typeof params.name === 'string';

  const [resInfo] = createResource(() =>
    getRepoInfo(
      isOwnerAndNameValid
        ? {
            owner: params.owner,
            name: params.name,
          }
        : {
            owner: '',
            name: '',
          }
    )
  );

  const [resReadMe] = createResource(() =>
    getReadme({
      owner: params.owner,
      name: params.name,
      expression: params.path
        ? `HEAD:${params.path}/README.md`
        : 'HEAD:README.md',
    })
  );

  createEffect(() => {
    if (resInfo() && !resInfo.loading) {
      setInfo(resInfo());
    }

    // eslint-disable-next-line no-console
    console.log('====================================');
    // eslint-disable-next-line no-console
    console.log(resInfo(), GITHUB_GRAPHQL);
    // eslint-disable-next-line no-console
    console.log('====================================');

    if (resReadMe() && !resReadMe.loading) {
      setReadme(resReadMe());
    }

    if (resInfo.loading || resReadMe.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  const repo = {
    info,
    readme,
  };

  return (
    <RepoContext.Provider value={repo}>
      <>{loading() ? <div>Loading...</div> : props.children}</>
    </RepoContext.Provider>
  );
}

export function useRepo() {
  return useContext(RepoContext);
}
