import { TabHeader } from '@/components';
import { shallowMount } from '@vue/test-utils';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('TabHeader', () => {
  it('should mount', () => {
    const wrapper = shallowMount(TabHeader);
    expect(wrapper.vm).toBeTruthy();
  });
});
