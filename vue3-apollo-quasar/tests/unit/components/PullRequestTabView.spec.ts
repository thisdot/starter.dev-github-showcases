import { mount } from '@vue/test-utils';
import { PullRequestTabView } from '@/components';
import { PULL_REQUESTS } from '@/components/PullRequestTabView/data';
import { createTestingPinia } from '@pinia/testing';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('PullRequestTabView', () => {
  it('should mount', () => {
    const wrapper = mount(PullRequestTabView, {
      global: { plugins: [createTestingPinia()] },
      props: {
        openPullRequests: {
          pullRequests: PULL_REQUESTS.openPullRequest,
          totalCount: 20,
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
        closedPullRequests: {
          pullRequests: PULL_REQUESTS.closedPullRequest,
          totalCount: 20,
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
