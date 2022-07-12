import { SearchInput } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('SearchInput', () => {
  it('should mount', () => {
    const wrapper = shallowMount(SearchInput);
    expect(wrapper.vm).toBeTruthy();
  });
});
