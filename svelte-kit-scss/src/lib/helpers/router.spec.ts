import type { IssueSearchTypePage } from '$lib/constants/matchers';
import type { Repository } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { MOCK_SIMPLE_USER_TYPE_USER } from './mocks/common';
import {
  resolveRepositoryHref,
  resolveRepositoryIssueSearchPageHref,
  resolveUserHref,
} from './router';

const MOCK_REPOSITORY_PROPS = {
  owner: {
    login: 'mock_owner_login',
  },
  name: 'mock_name',
} as Pick<Repository, 'owner' | 'name'>;

describe('.resolveRepositoryHref', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_REPOSITORY_PROPS;

      const output = resolveRepositoryHref(input);

      expect(output).toEqual('/mock_owner_login/mock_name');
    });
  });
});

describe('.resolveRepositoryIssueSearchPageHref', () => {
  describe('when called with repository and', () => {
    const CASES: [IssueSearchTypePage][] = [['issues'], ['pulls']];

    it.each(CASES)('%s', (issueSearchTypePage: IssueSearchTypePage) => {
      const output = resolveRepositoryIssueSearchPageHref(
        MOCK_REPOSITORY_PROPS,
        issueSearchTypePage
      );

      expect(output).toEqual(`/mock_owner_login/mock_name/${issueSearchTypePage}`);
    });
  });
});

describe('.resolveUserHref', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_SIMPLE_USER_TYPE_USER;

      const output = resolveUserHref(input);

      expect(output).toEqual(`/${input.login}`);
    });
  });
});
