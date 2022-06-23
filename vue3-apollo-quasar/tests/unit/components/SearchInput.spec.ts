import { SearchInput } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('SearchInput', () => {
  it.todo('should mount without error');
  it('should mount', () => {
    const wrapper = shallowMount(SearchInput);
    expect(wrapper.vm).toBeTruthy();
  });
});
