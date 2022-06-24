import { ProfilePageLayout } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('', () => {
  it('should mount', () => {
    const wrapper = shallowMount(ProfilePageLayout);
    expect(wrapper.vm).toBeTruthy();
  });
});
