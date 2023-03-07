import FetchApi from './api';
import { REPO_README_QUERY } from './queries/repo-readme';
import { RepoReadme, RepoReadmeVariables } from '../types/repo-readme-type';
import { useAppStore } from '../hooks/stores';

type Response = {
  data: {
    repository: RepoReadme;
  };
};

const getRepoReadMe = async (variables: RepoReadmeVariables) => {
  try {
    useAppStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: REPO_README_QUERY, variables })) as Response;
    useAppStore.setState({ isLoading: false, readMe: resp.data.repository?.readme?.text });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getRepoReadMe;
