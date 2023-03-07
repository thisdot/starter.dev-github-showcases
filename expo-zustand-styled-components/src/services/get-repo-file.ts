import FetchApi from './api';
import { REPO_FILE_QUERY } from './queries/repo-file';
import { RepoFile } from '../types/repo-file-type';
import { useAppStore } from '../hooks/stores';

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
  try {
    useAppStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: REPO_FILE_QUERY, variables })) as Response;
    useAppStore.setState({ isLoading: false, file: resp?.data?.repository?.blob });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getRepoFile;
