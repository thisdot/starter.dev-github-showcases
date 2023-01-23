export const readMeResponse = {
  data: {
    repository: {
      readme: {
        text: 'text',
      }
    }
  }
};

export const repoInforResponse = {
  data: {
    repository: {
      defaultBranchRef: {
        name: 'MockBranch'
      },
      isPrivate: true,
      forkCount: true,
      description: 'This is a description',
      homepageUrl: 'https://www.google.com',
      stargazerCount: 1,
      watchers: {
        totalCount: 2
      },
      issues: {
        totalCount: 2
      },
      pullRequests: {
        totalCount: 2
      },
      topics: {
        nodes: ['topic1', 'topic2', 'topic3']
      },
      owner: {
        orgName: 'tested'
      }
    }
  }
}
