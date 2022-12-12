import { describe, it } from 'vitest';
import { remapSimpleUser } from './common';
import { MOCK_REPOSITORY, MOCK_REPOSITORY_LICENSE_SIMPLE } from './mocks/repository';
import { buildRepositoryState, remapRepository, remapRepositoryLicenseSimple } from './repository';
import { expectCamelFromSnakeCasePropertiesMapping } from './test-utils';

describe('.remapRepositoryLicenseSimple', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_REPOSITORY_LICENSE_SIMPLE;

      const output = remapRepositoryLicenseSimple(input);

      expect(output).toBeTruthy();
      expectCamelFromSnakeCasePropertiesMapping(output, input);
    });
  });
});

describe('.remapRepository', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const mockInputLicense = MOCK_REPOSITORY_LICENSE_SIMPLE;
      const input = {
        ...MOCK_REPOSITORY,
        license: mockInputLicense,
      };

      const output = remapRepository(input);

      expect(output).toBeTruthy();
      expectCamelFromSnakeCasePropertiesMapping(output, input, ['owner', 'license']);
      expect(output.owner).toEqual(remapSimpleUser(input.owner));
      expect(output.license).toEqual(remapRepositoryLicenseSimple(mockInputLicense));
    });
  });
});

describe('.buildRepositoryState', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const pullsCount = 123;
      const input = remapRepository(MOCK_REPOSITORY);

      const output = buildRepositoryState(input, pullsCount);

      expect(output).toMatchObject(input);
      expect(output.openPullRequestsCount).toBe(pullsCount);
    });
  });
});
