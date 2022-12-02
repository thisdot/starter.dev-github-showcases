export const GithubResolvers = {
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
