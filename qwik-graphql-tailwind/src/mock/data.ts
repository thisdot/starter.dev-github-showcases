export const gistsResponse = {
  data: {
    viewer: {
      gists: {
        nodes: [
          {
            id: 'G_kwDOADjK-doAIGU0OTc3ODQ1ZmRlOGNjZmU1Yzc0MjQxNzlmZGMyZmVh',
            description: 'A react hook that handles firebase storage uploading',
            url: 'https://gist.github.com/e4977845fde8ccfe5c7424179fdc2fea',
            name: 'e4977845fde8ccfe5c7424179fdc2fea',
            files: [{ name: 'useFirebaseUploader.ts' }],
          },
          {
            id: 'MDQ6R2lzdGQ1Yzc1NTIwMWJiMTI1MmJiNzI2YzQ2ZTIzOTE1Mzgw',
            description: 'Mobx store for managing form state (built for my react-native app)',
            url: 'https://gist.github.com/d5c755201bb1252bb726c46e23915380',
            name: 'd5c755201bb1252bb726c46e23915380',
            files: [{ name: 'FormStore.js' }],
          },
        ],
      },
    },
  },
};

export const IssuesResponse = {
  data: {
    repository: {
      openIssues: {
        nodes: [
          {
            state: 'OPEN',
            createdAt: '20 sep 2020',
            closedAt: '20 sep 2021',
            comments: { totalCount: 3 },
            number: 121,
            author: { login: 'Dustin' },
            title: 'Save The last code',
            url: '#',
          },
          {
            state: 'OPEN',
            createdAt: '20 sep 2020',
            closedAt: '20 sep 2021',
            comments: { totalCount: 3 },
            number: 121,
            author: { login: 'Dustin' },
            title: 'Save The last code',
            url: '#',
          },
          {
            state: 'OPEN',
            createdAt: '20 sep 2020',
            closedAt: '20 sep 2021',
            comments: { totalCount: 3 },
            number: 121,
            author: { login: 'Dustin' },
            title: 'Save The last code',
            url: '#',
          },
        ],
      },
      closedIssues: {
        nodes: [
          {
            state: 'CLOSED',
            createdAt: '20 sep 2020',
            closedAt: '20 sep 2021',
            comments: { totalCount: 3 },
            number: 121,
            author: { login: 'Dustin' },
            title: 'Save The last code',
            url: '#',
          },
          {
            state: 'CLOSED',
            createdAt: '20 sep 2020',
            closedAt: '20 sep 2021',
            comments: { totalCount: 3 },
            number: 121,
            author: { login: 'Dustin' },
            title: 'Save The last code',
            url: '#',
          },
          {
            state: 'CLOSED',
            createdAt: '20 sep 2020',
            closedAt: '20 sep 2021',
            comments: { totalCount: 3 },
            number: 121,
            author: { login: 'Dustin' },
            title: 'Save The last code',
            url: '#',
          },
        ],
      },
    },
  },
};

export const repos = {
  data: {
    owner: {
      repositories: {
        pageInfo: {
          endCursor: undefined,
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: undefined,
        },
        nodes: [
          {
            id: 'MDEwOlJlcG9zaXRvcnkxMjM0NzUxMjM=',
            name: 'my-repo1',
            description: 'This is just a description for my-repo1.',
            isArchived: false,
            isPrivate: false,
            primaryLanguage: {
              id: 'MDg6TGFuZ3VhZ2UxNzI=',
              name: 'Javascript',
              color: '#6b7289',
            },
            updatedAt: '2019-01-17T23:41:24Z',
            languageColor: null,
            isFork: false,
            stargazerCount: 0,
            forkCount: 0,
          },
          {
            name: 'my-repo2',
            description: 'This is just a description for my-repo2.',
            isArchived: false,
            isPrivate: false,
            primaryLanguage: {
              id: 'MDg6TGFuZ3VhZ2UxNzI=',
              name: 'TypeScript',
              color: '#2b7489',
            },
            updatedAt: '2019-01-17T23:41:24Z',
            id: 'todo',
            languageColor: null,
            isFork: false,
            stargazerCount: 0,
            forkCount: 0,
          },
        ],
      },
    },
  },
};
