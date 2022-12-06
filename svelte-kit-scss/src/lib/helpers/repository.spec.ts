import { describe, it } from 'vitest';
import { MOCK_REPOSITORY_API_RESPONSE } from './mocks/repository';
import { mapRepoResToRepoState } from './repository';

describe('.mapRepoResToRepoState', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const pullsCount = 123;
      const response = MOCK_REPOSITORY_API_RESPONSE;

      const result = mapRepoResToRepoState(response, pullsCount);

      expect(result).toBeTruthy();
      expect(result.defaultBranch).toBe(response.default_branch);
      expect(result.description).toBe(response.description);
      expect(result.forkCount).toBe(response.forks_count);
      expect(result.openIssuesCount).toBe(response.open_issues_count);
      expect(result.openPullRequestsCount).toBe(pullsCount);
      expect(result.ownerName).toBe(response.owner.login);
      expect(result.repoName).toBe(response.name);
      expect(result.starCount).toBe(response.stargazers_count);
      expect(result.tags).toBe(response.topics);
      expect(result.visibility).toBe(response.visibility);
      expect(result.watchCount).toBe(response.watchers_count);
      expect(result.website).toBe(response.homepage);
    });
  });
});
