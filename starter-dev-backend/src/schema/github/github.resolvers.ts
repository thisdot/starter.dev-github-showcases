export const GithubResolvers = {
  Query: {
    repos: async (_: any, __: any, { restAPISources }: any) => {
      return await restAPISources.githubAPI.getRepos();
    },
  },
};
