import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { GistsPanel } from '@/components';

jest.mock('@vue/apollo-composable', () => {
  const testData = {
    value: {
      gists: {
        nodes: [],
      },
    },
  };

  const data = {
    result: {
      viewer: testData.value,
    },
    loading: false,
  };
  return {
    useQuery: jest.fn(() => data),
    useResult: jest.fn(() => testData),
  };
});

describe('GistsPanel', () => {
  it('should mount', () => {
    const wrapper = shallowMount(GistsPanel, {
      global: { plugins: [createTestingPinia()] },
    });

    expect(wrapper).toBeTruthy();
  });
});
