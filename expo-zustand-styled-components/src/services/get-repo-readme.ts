import FetchApi from './api';
import { REPO_README_QUERY } from './queries/repo-readme';
import { RepoReadme, RepoReadmeVariables } from '../types/repo-readme-type';

type Response = {
  data: {
    repository: RepoReadme;
  };
};

const getRepoReadMe = async (variables: RepoReadmeVariables) => {
  const resp = (await FetchApi({ query: REPO_README_QUERY, variables })) as Response;

  return resp.data.repository?.readme?.text;
};

export default getRepoReadMe;
