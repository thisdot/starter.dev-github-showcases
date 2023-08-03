import type {
  GithubSearchIssuePullRequest,
  GithubSimpleUser,
  IssuePullRequest,
  SimpleUser,
} from '$lib/interfaces';
import { describe, it, expect } from 'vitest';
import { remapIssue } from './issues';
import { MOCK_SEARCH_ISSUE, MOCK_SEARCH_ISSUE_PULL } from './mocks/issues';
import { expectCamelFromSnakeCasePropertiesMapping } from './test-utils';

describe('.remapIssue', () => {
  describe('when called', () => {
    describe('for issue', () => {
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
        expect(result.title).toEqual(MOCK_SEARCH_ISSUE.title);
        expectUserMappingCorrect(
          result.user as SimpleUser,
          MOCK_SEARCH_ISSUE.user as GithubSimpleUser
        );
        expect(result.pullRequest).toStrictEqual(undefined);
      });
    });
    describe('for pull request', () => {
      it('returns expected result', () => {
        const result = remapIssue(MOCK_SEARCH_ISSUE_PULL);

        expect(result).toBeTruthy();
        expect(result.assignees.length).toEqual(2);
        result.assignees.forEach((assignee, index) =>
          expectUserMappingCorrect(assignee, MOCK_SEARCH_ISSUE_PULL.assignees[index])
        );
        expect(result.closedAt).toEqual(MOCK_SEARCH_ISSUE_PULL.closed_at);
        expect(result.commentsCount).toEqual(MOCK_SEARCH_ISSUE_PULL.comments);
        expect(result.createdAt).toEqual(MOCK_SEARCH_ISSUE_PULL.created_at);
        expect(result.id).toEqual(MOCK_SEARCH_ISSUE_PULL.id);
        expect(result.number).toEqual(MOCK_SEARCH_ISSUE_PULL.number);
        expect(result.state).toEqual(MOCK_SEARCH_ISSUE_PULL.state);
        expect(result.title).toEqual(MOCK_SEARCH_ISSUE_PULL.title);
        expectUserMappingCorrect(
          result.user as SimpleUser,
          MOCK_SEARCH_ISSUE.user as GithubSimpleUser
        );
        expectCamelFromSnakeCasePropertiesMapping(
          result.pullRequest as IssuePullRequest,
          MOCK_SEARCH_ISSUE_PULL.pull_request as GithubSearchIssuePullRequest
        );
      });
    });
  });
});

function expectUserMappingCorrect(actual: SimpleUser, expected: GithubSimpleUser) {
  expect(actual.login).toEqual(expected.login);
  expect(actual.avatarUrl).toEqual(expected.avatar_url);
}
