import FetchApi, { ApiProps } from './api';
import { ORGANIZATION_REPOS_QUERY } from './queries/org-repos';
import { OrgRepoInfo } from '../types/org-repos';
import { Repo } from '../types/user-repos-type';

type OrgReposVariable = {
  organization: string;
  afterCursor: string;
  beforeCursor: string;
  orderBy: { field: string; direction: string };
  first: number;
  last?: number;
};

type Response = {
  data: OrgRepoInfo;
};

const getOrgRepos = async (variables: OrgReposVariable) => {

  const data: ApiProps<OrgReposVariable> = {
    url: ``, // missing url
    query: ORGANIZATION_REPOS_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer `, // missing token
    },
  };
  const resp = (await FetchApi(data)) as Response;

  const nodes = resp.data?.organization?.repositories?.nodes;
  const pageInfo = resp.data?.organization?.repositories?.pageInfo;

  if (!nodes) {
    return null;
  }
  const repos = nodes?.reduce((acc: Repo[], repo: Repo) => {
    return repo
      ? [
          ...acc,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazerCount: repo.stargazerCount,
            forkCount: repo.forkCount,
            isFork: repo.isFork,
            isArchived: repo.isArchived,
            primaryLanguage: {
              name: repo.primaryLanguage?.name,
              color: repo.primaryLanguage?.color,
            },
            visibility: repo.visibility,
            updatedAt: repo.updatedAt,
            owner: repo.owner,
          },
        ]
      : acc;
  }, []);

  return {
    orgInfo: {
      avatarUrl: resp.data?.organization?.avatarUrl,
      name: resp.data?.organization?.name,
    },
    pageInfo,
    repos,
  };
};

export default getOrgRepos;
