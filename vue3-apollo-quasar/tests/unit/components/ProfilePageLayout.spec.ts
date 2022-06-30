import { ProfilePageLayout } from '@/components';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';

jest.mock('@vue/apollo-composable', () => {
  const testData = {
    value: [
      {
        id: '1',
        name: 'test person',
        description: 'mock test',
        stargazerCount: '0',
        forkCount: '0',
        primaryLanguage: {
          name: 'TypeScript',
          color: 'mock color',
        },
        visibility: 'Public',
        updatedAt: 'mock date',
      },
      {},
    ],
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
    const wrapper = shallowMount(ProfilePageLayout, {
      global: { plugins: [createTestingPinia()] },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
