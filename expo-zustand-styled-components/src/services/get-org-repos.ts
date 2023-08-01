import FetchApi from './api';
import { ORGANIZATION_REPOS_QUERY } from './queries/org-repos';
import { OrgRepoInfo, OrgReposVariable } from '../types/org-repos';
import { Repo } from '../types/user-repos-type';
import { useOrgStore } from '../hooks/stores';

type Response = {
  data: OrgRepoInfo;
};

const getOrgRepos = async (variables: OrgReposVariable) => {
  const key = `${variables.organization}-${variables.afterCursor}-${variables.beforeCursor}`;
  if (useOrgStore.getState()._cache.has(key)) {
    const data = useOrgStore.getState()._cache.get(key);
    useOrgStore.setState({ isLoading: false, data });
  } else {
    try {
      useOrgStore.setState({ isLoading: true });
      const resp = (await FetchApi({ query: ORGANIZATION_REPOS_QUERY, variables })) as Response;

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

      const data = {
        orgInfo: {
          avatarUrl: resp.data?.organization?.avatarUrl,
          name: resp.data?.organization?.name,
        },
        pageInfo,
        repos,
      };
      useOrgStore.setState({ isLoading: false, data });
      useOrgStore.getState()._cache.set(key, data);
    } catch (err) {
      useOrgStore.setState({ isLoading: false, error: err.message });
    }
  }
};

export default getOrgRepos;
