import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue';
import { createTestingPinia } from '@pinia/testing';

jest.mock('@vue/apollo-composable', () => {
  const testData = {
    value: {
      topRepositories: {
        nodes: [],
      },
    },
  };

  const data = {
    result: {
      viewers: testData,
    },
    loading: false,
  };
  return {
    useQuery: jest.fn(() => data),
    useResult: jest.fn(() => testData),
  };
});

describe('Home', () => {
  it('should mount', () => {
    const wrapper = shallowMount(Home, {
      global: { plugins: [createTestingPinia()] },
    });

    expect(wrapper).toBeTruthy();
  });
});
