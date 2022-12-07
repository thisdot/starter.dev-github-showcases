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
  Org: {
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
