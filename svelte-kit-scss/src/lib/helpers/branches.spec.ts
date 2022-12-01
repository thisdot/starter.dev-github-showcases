import type { GithubBranch } from '$lib/interfaces';
import { remapBranchOption } from './branches';
import { afterEach, beforeAll, describe, it, vi } from 'vitest';
import type { BranchOption } from '$lib/components/FileExplorer/models';

const MOCK_BRANCH: GithubBranch = {
  name: 'mock_name',
  commit: {
    sha: 'mock_sha',
    url: 'mock_url',
  },
  protected: true,
  protection: {
    required_status_checks: {
      enforcement_level: 'mock_enforcement_level',
      contexts: [],
    },
  },
  protection_url: 'mock_protection_url',
};

describe('.remapBranchOption', () => {
  const mockBuildHrefFn = vi.fn<[string], string>();

  describe('when called', () => {
    describe('and buildHref function call success', () => {
      const MOCK_EXPECTED_RESULT_HREF = 'MOCK_RESULT_HREF';
      const MOCK_EXPECTED_RESULT = {
        name: MOCK_BRANCH.name,
        href: MOCK_EXPECTED_RESULT_HREF,
      };
      let result: BranchOption;

      beforeAll(() => {
        mockBuildHrefFn.mockImplementation(() => MOCK_EXPECTED_RESULT_HREF);
        result = remapBranchOption(MOCK_BRANCH, mockBuildHrefFn);
      });

      afterAll(() => {
        vi.restoreAllMocks();
      });

      it('calls buildHref function with correct argument', () => {
        expect(mockBuildHrefFn).toHaveBeenCalledWith(MOCK_BRANCH.name);
      });

      it('calls buildHref function once', () => {
        console.log(mockBuildHrefFn);
        expect(mockBuildHrefFn).toHaveBeenCalledTimes(1);
      });

      it('returns expected result', () => {
        expect(result).toEqual(MOCK_EXPECTED_RESULT);
      });
    });

    describe('and buildHref function throws error', () => {
      const MOCK_ERROR = new Error('mock_error');

      beforeAll(() => {
        mockBuildHrefFn.mockImplementation(() => {
          throw MOCK_ERROR;
        });
      });

      afterEach(() => {
        vi.restoreAllMocks();
      });

      it('throws error', () => {
        expect(() => remapBranchOption(MOCK_BRANCH, mockBuildHrefFn)).toThrowError(MOCK_ERROR);
      });
    });
  });
});
