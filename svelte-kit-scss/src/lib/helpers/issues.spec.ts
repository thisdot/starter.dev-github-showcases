import { IssueState, type GithubSearchIssueUser, type IssueUser } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { remapIssue } from './issues';
import { MOCK_SEARCH_ISSUE } from './mocks/issues';

describe('.remapIssue', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const result = remapIssue(MOCK_SEARCH_ISSUE);

      expect(result).toBeTruthy();
      expect(result.assignees.length).toEqual(2);
      result.assignees.forEach((assignee, index) =>
        expectUserMappingCorrect(assignee, MOCK_SEARCH_ISSUE.assignees[index])
      );
      expect(result.closedAt).toEqual(MOCK_SEARCH_ISSUE.closed_at);
      expect(result.commentsCount).toEqual(MOCK_SEARCH_ISSUE.comments);
      expect(result.createdAt).toEqual(MOCK_SEARCH_ISSUE.created_at);
      expect(result.id).toEqual(MOCK_SEARCH_ISSUE.id);
      expect(result.number).toEqual(MOCK_SEARCH_ISSUE.number);
      expect(result.state).toEqual(MOCK_SEARCH_ISSUE.state);
      expect(result.state).toEqual(IssueState.Open);
      expect(result.title).toEqual(MOCK_SEARCH_ISSUE.title);
      expectUserMappingCorrect(result.user, MOCK_SEARCH_ISSUE.user);
    });
  });
});

function expectUserMappingCorrect(actual: IssueUser, expected: GithubSearchIssueUser) {
  expect(actual.login).toEqual(expected.login);
  expect(actual.avatarUrl).toEqual(expected.avatar_url);
}
