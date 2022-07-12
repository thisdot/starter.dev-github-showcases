import { OrganizationPageLayout } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('', () => {
  it('should mount', () => {
    const wrapper = shallowMount(OrganizationPageLayout);
    expect(wrapper.vm).toBeTruthy();
  });
});
