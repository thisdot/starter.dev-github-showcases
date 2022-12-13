import type { Repository } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { resolveRepositoryHref } from './router';

describe('.resolveRepositoryHref', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = {
        owner: {
          login: 'mock_owner_login',
        },
        name: 'mock_name',
      } as unknown as Repository;

      const output = resolveRepositoryHref(input);

      expect(output).toEqual('/mock_owner_login/mock_name');
    });
  });
});
