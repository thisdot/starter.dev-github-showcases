import { shallowMount } from '@vue/test-utils';
import Auth from '@/views/Auth/Auth.vue';
import { createTestingPinia } from '@pinia/testing';

describe('Auth', () => {
  it('should mount', () => {
    const wrapper = shallowMount(Auth, {
      global: { plugins: [createTestingPinia()] },
    });

    expect(wrapper).toBeTruthy();
  });
});
