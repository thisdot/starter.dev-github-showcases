import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue';
import { createTestingPinia } from '@pinia/testing';

describe('Home', () => {
  it('should mount', () => {
    const wrapper = shallowMount(Home, {
      global: { plugins: [createTestingPinia()] },
    });

    expect(wrapper).toBeTruthy();
  });
});
