export const GithubResolvers = {
  Owner: {
    orgs: async ({ login }: any, test: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgs(login);
      return data;
    },
    starCount: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOwnerStarCount(login);
      return data.length;
    },
  },
  Orgs: {
    reposCount: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgRepos(login);
      return data.public_repos;
    },
    membersCount: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgsMemberCount(login);
      return data.length;
    },
    name: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgRepos(login);
      return data.name;
    },
  },
  Repo: {
    readme: async ({ owner, name }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getReadMe(owner.login, name);
      if (data === null) {
        return null;
      }
      return Buffer.from(data?.content, 'base64').toString('ascii');
    },
    tree: async ({ owner, name }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getTree(owner.login, name);
      return data?.tree ?? [];
    },
  },
  Query: {
    repos: async (_: any, { username, perPage }: any, { dataSources }: any) => {
      const data = dataSources.githubAPI.getRepos(username, perPage);
      return data;
    },
    repo: async (_: any, { owner, repoName }: any, { dataSources }: any) => {
      const data = dataSources.githubAPI.getRepo(owner, repoName);
      return data;
    },
    owner: async (_: any, __: any, { dataSources }: any) => {
      const data = dataSources.githubAPI.getOwner();
      return data;
    },
  },
};
