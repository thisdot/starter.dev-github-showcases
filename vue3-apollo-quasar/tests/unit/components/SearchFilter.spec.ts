import { shallowMount } from '@vue/test-utils';
import { SearchFilter } from '@/components';

describe('Search Filter', () => {
  it('should mount', () => {
    const wrapper = shallowMount(SearchFilter);
    expect(wrapper).toBeTruthy();
  });
});
