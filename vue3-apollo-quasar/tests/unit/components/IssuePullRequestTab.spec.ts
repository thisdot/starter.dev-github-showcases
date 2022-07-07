import { mount } from '@vue/test-utils';
import { IssuePullRequestTab } from '@/components';
import { TAB_TYPE } from '@/components/IssuePullRequestTab/data';

describe('IssuePullRequestTab', () => {
  const wrapper = mount(IssuePullRequestTab, {
    props: {
      openCounts: 16,
      closedCounts: 196,
      tabType: TAB_TYPE.PULL_REQUEST,
    },
  });

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
