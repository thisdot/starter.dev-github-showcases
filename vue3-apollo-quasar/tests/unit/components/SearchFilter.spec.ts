import { shallowMount } from '@vue/test-utils';
import { SearchFilter } from '@/components';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('Search Filter', () => {
  it('should mount', () => {
    const wrapper = shallowMount(SearchFilter);
    expect(wrapper).toBeTruthy();
  });
});
