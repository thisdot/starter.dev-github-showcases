import SearchFilter from '@/components/SearchFilter';
import { shallowMount } from '@vue/test-utils';

describe('Search Filter', () => {
  it.todo('should mount without error');
  it('should mount', () => {
    const wrapper = shallowMount(SearchFilter);
    expect(wrapper).toBeTruthy();
  });
});
