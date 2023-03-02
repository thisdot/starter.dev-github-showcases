import { useParams } from '@solidjs/router';
import { createContext, createResource, Show, useContext } from 'solid-js';
import getRepoInfo from '../services/get-repo-info';
import getReadme from '../services/get-readme';

const RepoContext = createContext();

export function RepoProvider(props) {
  const params = ((params) => ({
    ...params,
    owner: typeof params.owner === 'string' ? params.owner : '',
    name: typeof params.name === 'string' ? params.name : 'name',
    expression: `HEAD:${params.path ? params.path + '/' : ':'}README.md`,
  }))(useParams());

  const [info] = createResource(async () => getRepoInfo(params));
  const [readme] = createResource(async () => getReadme(params));

  return (
    <Show
      fallback={<div>Loading...</div>}
      when={!info.loading && !readme.loading}
    >
      <RepoContext.Provider value={{ info, readme }}>
        {props.children}
      </RepoContext.Provider>
    </Show>
  );
}

export function useRepo() {
  return useContext(RepoContext);
}
