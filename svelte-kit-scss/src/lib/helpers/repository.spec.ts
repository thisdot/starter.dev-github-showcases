import type { Repository } from '$lib/interfaces';
import { describe, it, type Mock } from 'vitest';
import { remapSimpleUser } from './common';
import { MOCK_REPOSITORY, MOCK_REPOSITORY_LICENSE_SIMPLE } from './mocks/repository';
import { buildRepositoryState, remapRepository, remapRepositoryLicenseSimple } from './repository';
import { expectCamelFromSnakeCasePropertiesMapping } from './test-utils';
import { remapTopicReference } from './topic';

vi.mock('./topic', () => ({
  remapTopicReference: vi.fn(),
}));

const mockRemapTopicReference = remapTopicReference as Mock;

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
    const MOCK_TOPICS_RESULT = { name: 'mock_topic', url: 'mock_topic_url' };
    beforeEach(() => {
      mockRemapTopicReference.mockImplementation(() => MOCK_TOPICS_RESULT);
    });
    afterEach(() => {
      mockRemapTopicReference.mockReset();
    });
    it('returns expected result', () => {
      const pullsCount = 123;
      const input = remapRepository(MOCK_REPOSITORY);
      const expectedRepositoryPartial: Partial<Repository> = { ...input };
      delete expectedRepositoryPartial.topics;
      const expectedTopics = Array(input.topics.length).fill(MOCK_TOPICS_RESULT);

      const output = buildRepositoryState(input, pullsCount);

      expect(output).toMatchObject(expectedRepositoryPartial);
      expect(output.openPullRequestsCount).toEqual(pullsCount);
      expect(mockRemapTopicReference).toHaveBeenCalledTimes(input.topics.length);
      expect(output.topics).toEqual(expectedTopics);
    });
  });
});
