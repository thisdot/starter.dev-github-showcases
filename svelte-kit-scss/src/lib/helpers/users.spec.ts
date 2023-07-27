import { describe, it } from 'vitest';
import { MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION, MOCK_PROFILE_PLAN } from './mocks/users';
import { expectCamelFromSnakeCasePropertiesMapping } from './test-utils';
import { remapProfilePlan, remapPublicProfileInformation } from './users';

describe('.remapProfilePlan', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_PROFILE_PLAN;

      const output = remapProfilePlan(input);

      expectCamelFromSnakeCasePropertiesMapping(output, input);
    });
  });
});

describe('.remapPublicProfileInformation', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION;

      const output = remapPublicProfileInformation(input);

      expectCamelFromSnakeCasePropertiesMapping(output, input, ['plan']);
      const expectedPlan = MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION.plan
        ? remapProfilePlan(MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION.plan)
        : undefined;
      expect(output.plan).toEqual(expectedPlan);
    });
  });
});
