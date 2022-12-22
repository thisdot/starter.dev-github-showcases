import { describe, it, type Mock } from 'vitest';
import { MOCK_SIMPLE_USER_TYPE_USER } from '../mocks/common/simple-user';
import { remapSimpleUser } from './simple-user';
import { expectCamelFromSnakeCasePropertiesMapping } from '../test-utils';
import { resolveUserHref } from '../router';

const mockResolveUserHref = resolveUserHref as Mock;
vi.mock('../router', () => ({
  resolveUserHref: vi.fn(),
}));

describe('.remapSimpleUser', () => {
  describe('when called', () => {
    const MOCK_HREF = 'MOCK_HREF';
    beforeAll(() => {
      mockResolveUserHref.mockImplementation(() => MOCK_HREF);
    });
    afterAll(() => {
      mockResolveUserHref.mockReset();
    });
    it('returns expected result', () => {
      const input = MOCK_SIMPLE_USER_TYPE_USER;

      const output = remapSimpleUser(input);

      expectCamelFromSnakeCasePropertiesMapping(output, input, ['href']);
      expect(mockResolveUserHref).toHaveBeenCalledOnce();
      expect(mockResolveUserHref).toHaveBeenCalledWith(input);
      expect(output.href).toEqual(MOCK_HREF);
    });
  });
});
