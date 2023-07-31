import { mount } from '@vue/test-utils';
import { PaginationButtons } from '@/components';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('PaginationButtons mounting', () => {
  it('should mount', () => {
    const wrapper = mount(PaginationButtons);
    const pagination = wrapper.find('.pagination');
    expect(wrapper.exists()).toBeTruthy();
    expect(pagination.exists()).toBeTruthy();
  });
});
