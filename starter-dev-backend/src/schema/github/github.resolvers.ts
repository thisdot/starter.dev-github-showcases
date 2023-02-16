export const GithubResolvers = {
  Owner: {
    // retrieves orgs
    orgs: async ({ login }: any, test: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgs(login);
      return data;
    },
    // retrieves star count
    starred_url: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOwnerStarCount(login);
      return data.length;
    },
  },
  Orgs: {
    // retrieves public repos
    repos_url: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgRepos(login);
      return data.public_repos;
    },
    // retrieves org members count
    members_url: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgsMemberCount(login);
      return data.length;
    },
    // retrieves org name
    name: async ({ login }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getOrgRepos(login);
      return data.name;
    },
  },
  Repo: {
    readme: async ({ owner, name }: any, __: any, { dataSources }: any) => {
      const data = await dataSources.githubAPI.getReadMe(owner.login, name);
      return data.content;
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
