import gql from 'graphql-tag';
import { handler } from '../../graphql';
import { GitHubAPI } from '../../datasources/github-api';
import { createMockRepoData } from '../../utils/test';
import { Repo } from '../../../types/graphql';

jest.mock('../../datasources/github-api');
const mockedGitHubAPI = jest.mocked(GitHubAPI, true);

describe('github queries', () => {
  describe('github repo queries', () => {
    let mockedRepoData: Repo;
    let subject: any;

    beforeAll(async () => {
      mockedRepoData = createMockRepoData;
      mockedGitHubAPI.getRepo.mockedResolvedValue(mockedRepoData);

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
      subject = await handler.executeOperation({
        query: QUERY,
        variables: {
          owner: 'WillHutt',
          repoName: 'starwars-api',
        },
      });
    });

    afterAll(() => {
      mockedGitHubAPI.getRepo.mockClear();
    });

    it('Should have made a call to get a repo', async () => {
      expect(mockedGitHubAPI.getRepo).toHaveBeenCalledWith(
        mockedRepoData.owner.login,
      );
    });
  });
});
