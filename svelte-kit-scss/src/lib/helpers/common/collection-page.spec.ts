import type { GithubCollectionPage } from '$lib/interfaces';
import { describe, it, vi } from 'vitest';
import { remapCollectionPage } from './collection-page';

type ItemType = {
  item_data: string;
};

const MOCK_COLLECTION_PAGE: GithubCollectionPage<ItemType> = {
  total_count: 123,
  incomplete_results: false,
  items: [{ item_data: 'mock_data_0' }, { item_data: 'mock_data_1' }],
};

describe('.remapCollectionPage', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_COLLECTION_PAGE;
      const mockMapItemFn = vi.fn().mockImplementation((x) => ({ data: x.item_data }));

      const output = remapCollectionPage(input, mockMapItemFn);

      expect(mockMapItemFn).toHaveBeenCalledTimes(input.items.length);
      expect(output.totalCount).toEqual(input.total_count);
      expect(output.items).toEqual([{ data: 'mock_data_0' }, { data: 'mock_data_1' }]);
    });
  });
});
