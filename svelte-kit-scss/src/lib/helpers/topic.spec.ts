import { describe, it } from 'vitest';
import { remapTopicReference } from './topic';

describe('.remapTopicReference', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = 'mock_topic';

      const output = remapTopicReference(input);

      expect(output).toBeTruthy();
      expect(output.name).toEqual('mock_topic');
      expect(output.url).toEqual('https://github.com/topics/mock_topic');
    });
  });
});
