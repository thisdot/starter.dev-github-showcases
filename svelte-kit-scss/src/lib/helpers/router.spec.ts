import type { IssueSearchTypePage } from '$lib/constants/matchers';
import type { Repository } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { MOCK_SIMPLE_USER_TYPE_USER } from './mocks/common';
import {
  buildPageUrl,
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

describe('.buildPageUrl', () => {
  describe('when called', () => {
    describe('with url containing the page number', () => {
      const MOCK_URL = new URL('https://example.com/collection?page=9');
      describe('and page number less than 2', () => {
        it('returns expected result', () => {
          const result = buildPageUrl(MOCK_URL, 1);
          expect(result.toString()).toStrictEqual('https://example.com/collection');
        });
      });
      describe('and page number more or equal to 2', () => {
        it('returns expected result', () => {
          const result = buildPageUrl(MOCK_URL, 3);
          expect(result.toString()).toStrictEqual('https://example.com/collection?page=3');
        });
      });
    });

    describe('with url not containing the page number', () => {
      const MOCK_URL = new URL('https://example.com/collection');
      describe('and page number less than 2', () => {
        it('returns expected result', () => {
          const result = buildPageUrl(MOCK_URL, 1);
          expect(result.toString()).toStrictEqual('https://example.com/collection');
        });
      });
      describe('and page number more or equal to 2', () => {
        it('returns expected result', () => {
          const result = buildPageUrl(MOCK_URL, 3);
          expect(result.toString()).toStrictEqual('https://example.com/collection?page=3');
        });
      });
    });
  });
});
