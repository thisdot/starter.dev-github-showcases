import { mount } from '@vue/test-utils';
import { IssueTabView } from '@/components';
import { ISSUES } from '@/components/IssueTabView/data';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('IssueTabView', () => {
  it('should mount', () => {
    const wrapper = mount(IssueTabView, {
      props: {
        openIssues: {
          edges: ISSUES.openIssue,
        },
        closedIssues: {
          edges: ISSUES.closedIssue,
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
