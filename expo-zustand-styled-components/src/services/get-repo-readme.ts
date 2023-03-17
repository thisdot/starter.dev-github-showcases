import FetchApi from './api';
import { REPO_README_QUERY } from './queries/repo-readme';
import { RepoReadme, RepoReadmeVariables } from '../types/repo-readme-type';
import { useRepoInfoStore } from '../hooks/stores';

type Response = {
  data: {
    repository: RepoReadme;
  };
};

const getRepoReadMe = async (variables: RepoReadmeVariables) => {
  const key = `${variables.name}-${variables.owner}-${variables.expression}`;
  if (useRepoInfoStore.getState()._readMe.has(key)) {
    const readMe = useRepoInfoStore.getState()._readMe.get(key);
    useRepoInfoStore.setState({ isLoading: false, readMe });
  } else {
  try {
    useRepoInfoStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: REPO_README_QUERY, variables })) as Response;
    useRepoInfoStore.setState({ isLoading: false, readMe: resp.data.repository?.readme?.text });
    useRepoInfoStore.getState()._readMe.set(key, resp.data.repository?.readme?.text);
  } catch (err) {
    useRepoInfoStore.setState({ isLoading: false, error: err.message });
  }
}
};

export default getRepoReadMe;
