import { mount } from '@vue/test-utils';
import { PullRequestTabView } from '@/components';
import { PULL_REQUESTS } from '@/components/PullRequestTabView/data';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('PullRequestTabView', () => {
  it('should mount', () => {
    const wrapper = mount(PullRequestTabView, {
      props: {
        openPullRequests: {
          edges: PULL_REQUESTS.openPullRequest,
        },
        closedPullRequests: {
          edges: PULL_REQUESTS.closedPullRequest,
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
