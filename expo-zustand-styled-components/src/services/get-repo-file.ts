import FetchApi from './api';
import { REPO_FILE_QUERY } from './queries/repo-file';
import { RepoFile } from '../types/repo-file-type';
import { useRepoInfoStore } from '../hooks/stores';

type RepoFileVariables = {
  owner: string;
  name: string;
  expression: string;
};

type Response = {
  data: {
    repository: RepoFile;
  };
};

const getRepoFile = async (variables: RepoFileVariables) => {
  const key = `${variables.name}-${variables.owner}-${variables.expression}`;
  if (useRepoInfoStore.getState()._file.has(key)) {
    const data = useRepoInfoStore.getState()._file.get(key);
    useRepoInfoStore.setState({ isLoading: false, file: data });
  } else {
    try {
      useRepoInfoStore.setState({ isLoading: true });
      const resp = (await FetchApi({ query: REPO_FILE_QUERY, variables })) as Response;
      useRepoInfoStore.setState({ isLoading: false, file: resp?.data?.repository?.blob });
      useRepoInfoStore.getState()._file.set(key, resp?.data?.repository?.blob);
    } catch (err) {
      useRepoInfoStore.setState({ isLoading: false, error: err.message });
    }
  }
};

export default getRepoFile;
