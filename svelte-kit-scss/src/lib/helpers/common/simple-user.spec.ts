import { describe, it } from 'vitest';
import { MOCK_SIMPLE_USER_TYPE_USER } from '../mocks/common/simple-user';
import { remapSimpleUser } from './simple-user';
import { expectCamelFromSnakeCasePropertiesMapping } from '../test-utils';

describe('.remapSimpleUser', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_SIMPLE_USER_TYPE_USER;

      const output = remapSimpleUser(input);

      expectCamelFromSnakeCasePropertiesMapping(output, input);
    });
  });
});
