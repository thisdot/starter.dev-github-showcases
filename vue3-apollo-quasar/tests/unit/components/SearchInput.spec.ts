import { SearchInput } from '@/components';
import { shallowMount } from '@vue/test-utils';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('SearchInput', () => {
  it('should mount', () => {
    const wrapper = shallowMount(SearchInput);
    expect(wrapper.vm).toBeTruthy();
  });
});
