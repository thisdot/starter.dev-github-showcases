import { mount } from '@vue/test-utils';
import { IssuePullRequestTab } from '@/components';
import { TAB_TYPE, TABS } from '@/components/IssuePullRequestTab/data';

describe('IssuePullRequestTab', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(IssuePullRequestTab, {
      props: {
        openCounts: 16,
        closedCounts: 196,
        tabType: TAB_TYPE.PULL_REQUEST,
      },
    });
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show closed pr or issue on close tab click', async () => {
    const tabs = wrapper.findAll('.tab');
    await tabs[1].trigger('click');
    expect(wrapper.vm.activeTab).toBe(TABS.CLOSED);
  });

  it('should show label menu', async () => {
    const dropdown_labels = wrapper.findAll('.dropdown-label');
    await dropdown_labels[0].trigger('click');
    const dropdown_menu = wrapper.find('.dropdown-menu');
    expect(dropdown_menu.exists()).toBeTruthy();
  });
});
