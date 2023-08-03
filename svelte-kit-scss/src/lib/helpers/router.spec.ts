import type { Breadcrumb } from '$lib/components/shared/Breadcrumbs/models';
import type { IssueSearchTypePage } from '$lib/constants/matchers';
import type { Repository } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { MOCK_SIMPLE_USER_TYPE_USER } from './mocks/common';
import {
  buildContentItemBreadcrumbs,
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

describe('.buildContentItemBreadcrumbs', () => {
  describe('when called', () => {
    const MOCK_USERNAME = 'mock_username';
    const MOCK_REPO = 'mock_repo';

    const CASES: [string, string, string, string[], string | undefined, Breadcrumb[]][] = [
      [
        'for default branch, without path segments, without filename',
        'branch-name-default',
        'branch-name-default',
        [],
        undefined,
        [],
      ],
      [
        'for default branch, with path segments, without filename',
        'branch-name-default',
        'branch-name-default',
        ['mock_folderPathSegment_1', 'mock_folderPathSegment_2'],
        undefined,
        [
          {
            name: MOCK_REPO,
            href: `/${MOCK_USERNAME}/${MOCK_REPO}`,
            emphasis: true,
          },
          {
            name: 'mock_folderPathSegment_1',
            href: `/${MOCK_USERNAME}/${MOCK_REPO}/tree/branch-name-default/mock_folderPathSegment_1`,
          },
          {
            name: 'mock_folderPathSegment_2',
            href: undefined,
            emphasis: true,
          },
        ],
      ],
      [
        'for non-default branch, with path segments, without filename',
        'branch-name',
        'branch-name-default',
        ['mock_folderPathSegment_1', 'mock_folderPathSegment_2'],
        undefined,
        [
          {
            name: MOCK_REPO,
            href: `/${MOCK_USERNAME}/${MOCK_REPO}/tree/branch-name`,
            emphasis: true,
          },
          {
            name: 'mock_folderPathSegment_1',
            href: `/${MOCK_USERNAME}/${MOCK_REPO}/tree/branch-name/mock_folderPathSegment_1`,
          },
          {
            name: 'mock_folderPathSegment_2',
            emphasis: true,
          },
        ],
      ],
      [
        'for default branch, with path segments, with filename',
        'branch-name-default',
        'branch-name-default',
        ['mock_folderPathSegment_1', 'mock_folderPathSegment_2'],
        'file_name.ext',
        [
          {
            name: MOCK_REPO,
            href: `/${MOCK_USERNAME}/${MOCK_REPO}`,
            emphasis: true,
          },
          {
            name: 'mock_folderPathSegment_1',
            href: `/${MOCK_USERNAME}/${MOCK_REPO}/tree/branch-name-default/mock_folderPathSegment_1`,
          },
          {
            name: 'mock_folderPathSegment_2',
            href: `/${MOCK_USERNAME}/${MOCK_REPO}/tree/branch-name-default/mock_folderPathSegment_1/mock_folderPathSegment_2`,
          },
          {
            name: 'file_name.ext',
            href: undefined,
            emphasis: true,
          },
        ],
      ],
      [
        'for non-default branch, without path segments, with filename',
        'branch-name',
        'branch-name-default',
        [],
        undefined,
        [],
      ],
      [
        'for default branch, without path segments, with filename',
        'branch-name-default',
        'branch-name-default',
        [],
        'file_name.ext',
        [
          {
            name: MOCK_REPO,
            href: `/${MOCK_USERNAME}/${MOCK_REPO}`,
            emphasis: true,
          },
          {
            name: 'file_name.ext',
            emphasis: true,
          },
        ],
      ],
    ];

    it.each(CASES)(
      '%s',
      (description, branch, defaultBranch, folderPathSegments, fileName, expectedResult) => {
        console.log(description, folderPathSegments);
        const output = buildContentItemBreadcrumbs(
          MOCK_USERNAME,
          MOCK_REPO,
          branch,
          defaultBranch,
          folderPathSegments,
          fileName
        );
        expect(output).toEqual(expectedResult);
      }
    );
  });
});
