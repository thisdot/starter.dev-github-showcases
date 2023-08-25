import { mount } from '@vue/test-utils';
import { IssueTabView } from '@/components';
import { ISSUES } from '@/components/IssueTabView/data';
import { createTestingPinia } from '@pinia/testing';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('IssueTabView', () => {
  it('should mount', () => {
    const wrapper = mount(IssueTabView, {
      global: { plugins: [createTestingPinia()] },
      props: {
        openIssues: {
          pullRequests: ISSUES.openIssue,
          totalCount: 20,
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
        closedIssues: {
          pullRequests: ISSUES.closedIssue,
          totalCount: 20,
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
