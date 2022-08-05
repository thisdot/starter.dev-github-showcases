import { mount } from '@vue/test-utils';
import { PaginationButtons } from '@/components';

describe('PaginationButtons mounting', () => {
  it('should mount', () => {
    const wrapper = mount(PaginationButtons);
    const pagination = wrapper.find('.pagination');
    expect(wrapper.exists()).toBeTruthy();
    expect(pagination.exists()).toBeTruthy();
  });
});
