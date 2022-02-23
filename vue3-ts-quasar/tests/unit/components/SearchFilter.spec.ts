import { shallowMount } from '@vue/test-utils';
import { SearchFilter } from '@/components';

describe('Search Filter', () => {
  it.todo('should mount without error');
  it('should mount', () => {
    const wrapper = shallowMount(SearchFilter);
    expect(wrapper).toBeTruthy();
  });
});
