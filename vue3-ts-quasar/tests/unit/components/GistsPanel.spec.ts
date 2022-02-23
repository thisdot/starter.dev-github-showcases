import { shallowMount } from '@vue/test-utils';
import GistsPanel from '@/components/GistsPanel/GistsPanel.vue';
import { createTestingPinia } from '@pinia/testing';

describe('GistsPanel', () => {
  it('should mount', () => {
    const wrapper = shallowMount(GistsPanel, {
      global: { plugins: [createTestingPinia()] },
    });

    expect(wrapper).toBeTruthy();
  });
});
