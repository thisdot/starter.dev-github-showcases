import { OrgReposQuery, Repo, UserReposQuery } from '../../gql';

export const parseProfileReposQuery = (data: UserReposQuery) => {
  const nodes = data?.user?.repositories.nodes;
  const pageInfo = data?.user?.repositories.pageInfo;

  if (!nodes) {
    return undefined;
  }

  const repos = nodes.reduce((acc: Repo[], repo: any) => {
    return repo
      ? [
          ...acc,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazerCount: repo.stargazerCount,
            forkCount: repo.forkCount,
            languageColor: repo.primaryLanguage?.color,
            language: repo.primaryLanguage?.name,
            isPrivate: repo.isPrivate,
            isArchived: repo.isArchived,
            isFork: repo.isFork,
            updatedAt: new Date(repo.updatedAt),
            routePath: repo.name,
          },
        ]
      : acc;
  }, []);

  return {
    repos,
    pageInfo,
  };
};

export const parseOrgReposQuery = (data: OrgReposQuery, owner: string) => {
  const nodes = data?.organization?.repositories.nodes;
  const pageInfo = data?.organization?.repositories.pageInfo;

  if (!nodes) {
    return undefined;
  }
  const repos = nodes.reduce((acc: Repo[], repo: any) => {
    return repo
      ? [
          ...acc,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazerCount: repo.stargazerCount,
            forkCount: repo.forkCount,
            languageColor: repo.primaryLanguage?.color,
            language: repo.primaryLanguage?.name,
            isPrivate: repo.isPrivate,
            isArchived: repo.isArchived,
            isFork: repo.isFork,
            updatedAt: new Date(repo.updatedAt),
            routePath: `../../${owner}/${repo.name}`,
          },
        ]
      : acc;
  }, []);

  return {
    repos,
    pageInfo,
  };
};
