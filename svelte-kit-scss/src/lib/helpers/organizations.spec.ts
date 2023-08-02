import { describe, it } from 'vitest';
import { MOCK_ORGANIZATION_SIMPLE } from './mocks/organizations';
import { remapOrganizationSimple } from './organizations';
import { expectCamelFromSnakeCasePropertiesMapping } from './test-utils';

describe('.remapOrganizationSimple', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_ORGANIZATION_SIMPLE;

      const output = remapOrganizationSimple(input);

      expectCamelFromSnakeCasePropertiesMapping(output, input);
    });
  });
});
