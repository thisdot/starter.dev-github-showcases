import { mount } from '@vue/test-utils';
import { IssuePullRequestTab } from '@/components';
import { TAB_TYPE, TABS } from '@/components/IssuePullRequestTab/data';

describe('IssuePullRequestTab', () => {
  const wrapper = mount(IssuePullRequestTab, {
    props: {
      openCounts: 16,
      closedCounts: 196,
      tabType: TAB_TYPE.PULL_REQUEST,
    },
  });

  const tabs = wrapper.findAll('.tab');
  const dropdown_labels = wrapper.findAll('.dropdown-label');

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it.each(tabs)(
    'should toggle between tabs open and closed pull requests',
    async (tab) => {
      const updateActiveTab = jest.spyOn(wrapper.vm, 'updateActiveTab');
      await tab.trigger('click');
      const index = tabs.indexOf(tab);
      expect(updateActiveTab).toHaveBeenCalled();
      if (index === 0) {
        expect(wrapper.vm.activeTab).toBe(TABS.OPEN);
      } else {
        expect(wrapper.vm.activeTab).toBe(TABS.CLOSED);
      }
    },
  );

  it.each(dropdown_labels)('should show and hide dropdowns', async (btn) => {
    const toggleLabelMenu = jest.spyOn(wrapper.vm, 'toggleLabelMenu');
    const toggleSortMenu = jest.spyOn(wrapper.vm, 'toggleSortMenu');
    await btn.trigger('click');
    const index = dropdown_labels.indexOf(btn);
    const dropdown_menu = wrapper.find('.dropdown_menu');

    if (index === 0) {
      expect(toggleLabelMenu).toHaveBeenCalled();
    } else {
      expect(toggleSortMenu).toHaveBeenCalled();
    }
    expect(dropdown_menu).toBeTruthy();
  });
});
