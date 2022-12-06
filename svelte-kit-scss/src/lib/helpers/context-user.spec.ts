import { describe, it, vi } from 'vitest';
import { remapContextUserAsync } from './context-user';
import { MOCK_USER_API_RESPONSE } from './mocks/context-user';

const MOCK_FETCH_API_RESPONSE = {
  json: vi.fn().mockResolvedValue(MOCK_USER_API_RESPONSE),
} as unknown as Response;

describe('.remapContextUserAsync', () => {
  describe('when called', () => {
    it('returns expected result', async () => {
      const result = await remapContextUserAsync(MOCK_FETCH_API_RESPONSE);
      expect(result).toEqual(MOCK_USER_API_RESPONSE);
    });
  });
});
