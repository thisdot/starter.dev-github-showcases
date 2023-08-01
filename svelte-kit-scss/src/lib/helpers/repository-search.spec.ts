import { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';
import type { RepositorySearchQueryParameters } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { isRepositorySearchQueryParametersEqual } from './repository-search';

describe('.isRepositorySearchQueryParametersEqual', () => {
  describe('when called with equal params returns expected result', () => {
    // todo: add cases. The case was needed for fixing bug
    const CASES: Array<[RepositorySearchQueryParameters, RepositorySearchQueryParameters]> = [
      [
        {
          language: undefined,
          sort: RepositorySearchSort.LastUpdated,
          term: undefined,
          type: RepositorySearchType.All,
        },
        { sort: RepositorySearchSort.LastUpdated },
      ],
    ];
    it.each(CASES)(
      'case %#',
      (param1: RepositorySearchQueryParameters, param2: RepositorySearchQueryParameters) => {
        const result = isRepositorySearchQueryParametersEqual(param1, param2);
        expect(result).toStrictEqual(true);
      }
    );
  });
});
