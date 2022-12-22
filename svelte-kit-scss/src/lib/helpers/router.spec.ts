import type { Repository } from '$lib/interfaces';
import { describe, it } from 'vitest';
import { MOCK_SIMPLE_USER_TYPE_USER } from './mocks/common';
import { resolveRepositoryHref, resolveUserHref } from './router';

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

describe('.resolveUserHref', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_SIMPLE_USER_TYPE_USER;

      const output = resolveUserHref(input);

      expect(output).toEqual(`/${input.login}`);
    });
  });
});
