import { OrganizationPageLayout } from '@/components';
import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

jest.mock('@vue/apollo-composable', () => {
  const testData = {
    value: null,
  };

  const data = {
    result: {
      nodes: testData,
    },
    loading: false,
  };

  return {
    useQuery: jest.fn(() => data),
    useResult: jest.fn(() => testData),
  };
});

describe('', () => {
  it('should mount', () => {
    const wrapper = shallowMount(OrganizationPageLayout, {
      global: { plugins: [createTestingPinia()] },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
