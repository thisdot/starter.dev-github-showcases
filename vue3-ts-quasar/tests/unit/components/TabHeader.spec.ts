import { TabHeader } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('TabHeader', () => {
  it.todo('Should mount without error');
  it('should mount', () => {
    const wrapper = shallowMount(TabHeader);
    expect(wrapper.vm).toBeTruthy();
  });
});
