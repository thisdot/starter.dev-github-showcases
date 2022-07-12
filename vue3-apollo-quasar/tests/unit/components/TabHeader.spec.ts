import { TabHeader } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('TabHeader', () => {
  it('should mount', () => {
    const wrapper = shallowMount(TabHeader);
    expect(wrapper.vm).toBeTruthy();
  });
});
