export const GithubResolvers = {
  Query: {
    repos: async (_, __, { restAPISources }) => {
      return await restAPISources.githubAPI.getRepos();
    },
  },
};
