import ProfilePageLayout from '@/components/ProfilePageLayout';
import { shallowMount } from '@vue/test-utils';

describe('', () => {
  it.todo('should mount without errors');
  it('should mount', () => {
    const wrapper = shallowMount(ProfilePageLayout);
    expect(wrapper.vm).toBeTruthy();
  });
});
