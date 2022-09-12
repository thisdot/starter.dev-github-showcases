import { mount } from '@vue/test-utils';
import { IssueTabView } from '@/components';
import { ISSUES } from '@/components/IssueTabView/data';

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
