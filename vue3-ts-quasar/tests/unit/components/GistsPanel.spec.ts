import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { GistsPanel } from '@/components';

describe('GistsPanel', () => {
  it('should mount', () => {
    const wrapper = shallowMount(GistsPanel, {
      global: { plugins: [createTestingPinia()] },
    });

    expect(wrapper).toBeTruthy();
  });
});
