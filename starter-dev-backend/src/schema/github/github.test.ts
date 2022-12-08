import gql from 'graphql-tag';
import { apolloServer } from '../../graphql';
// import { GitHubAPI } from '../../datasources/github-api';
// import { GitHubModel } from '../../models/GitHubModel';
import { createMockRepoData } from '../../utils/test';

// Repo mock
const mockGetRepo = jest.fn().mockResolvedValue(createMockRepoData);
jest.mock('../../datasources/github-api', () => {
  return jest.fn().mockImplementation(() => {
    return { getRepo: mockGetRepo };
  });
});

const defaultParams = {
  event: { headers: {} },
  context: {},
  express: {
    req: {},
    res: {},
  },
};

describe('github queries', () => {
  describe('github repo queries', () => {
    // let service: any;
    let subject: any;

    beforeEach(async () => {
      //   service = new GitHubAPI();
      //   service = new GitHubModel();

      const QUERY = gql`
        query Repo($owner: String!, $repoName: String!) {
          repo(owner: $owner, repoName: $repoName) {
            description
            forks_count
            full_name
            id
            language
            name
            owner {
              login
            }
            private
            stargazers_count
            title
            updated_at
          }
        }
      `;

      // should be on apolloServer?
      // we have apolloServer not being exported and inside a handler
      subject = await apolloServer.executeOperation(
        {
          query: QUERY,
          variables: {
            owner: 'WillHutt',
            repoName: 'starwars-api',
          },
        },
        defaultParams,
      );
    });

    // it('Should call getRepo and return repo data', async () => {
    //   const repo = await service.getRepo('WillHutt', 'starwars-api');
    //   expect(repo).toEqual({
    //     __typename: 'Repo',
    //     description: 'test',
    //     forks_count: 0,
    //     full_name: 'WillHutt/starwars-api',
    //     id: '567482388',
    //     language: 'JavaScript',
    //     name: 'starwars-api',
    //     owner: {
    //       __typename: 'User',
    //       login: 'WillHutt',
    //     },
    //     private: false,
    //     stargazers_count: 0,
    //     title: 'test',
    //     updated_at: '2022-11-17T22:18:18Z',
    //   });
    //   expect(mockGetRepo).toHaveBeenCalled();
    //   expect(mockGetRepo).toHaveBeenCalledWith('WillHutt', 'starwars-api');
    // });

    it('Should return query data', () => {
      expect(subject).toEqual({
        __typename: 'Repo',
        description: 'test',
        forks_count: 0,
        full_name: 'WillHutt/starwars-api',
        id: '567482388',
        language: 'JavaScript',
        name: 'starwars-api',
        owner: {
          __typename: 'User',
          login: 'WillHutt',
        },
        private: false,
        stargazers_count: 0,
        title: 'test',
        updated_at: '2022-11-17T22:18:18Z',
      });
    });
  });
});
