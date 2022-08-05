import { mount } from '@vue/test-utils';
import { IssuePullRequestTab } from '@/components';
import { TAB_TYPE, TABS } from '@/components/IssuePullRequestTab/data';

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

describe('IssuePullRequestTab', () => {
  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe('IssuePullRequestTab for Pull Request', () => {
  const labels = [
    ['.dropdown-label--label', '.dropdown_menu'],
    ['.dropdown-label--sort', '.dropdown_menu'],
  ];

  it('should show closed pr or issue on close tab click', async () => {
    const closedTab = wrapper.find('.tab--closed');
    await closedTab.trigger('click');
    expect(wrapper.vm.activeTab).toBe(TABS.CLOSED);
  });

  it.each(labels)(
    'should show menu for Label and Sort',
    async (accessor, target) => {
      const dropdown_label = wrapper.find(accessor);
      await dropdown_label.trigger('click');
      const dropdown_menu = wrapper.find(target);
      expect(dropdown_menu.exists()).toBeTruthy();
    },
  );
});

describe('IssuePullRequestTab for Issue', () => {
  beforeEach(async () => {
    wrapper.setProps({
      openCounts: 16,
      closedCounts: 196,
      tabType: TAB_TYPE.ISSUE,
    });
  });

  const labels = [
    ['.dropdown-label--label', '.dropdown_menu'],
    ['.dropdown-label--milestones', '.dropdown_menu'],
    ['.dropdown-label--sort', '.dropdown_menu'],
  ];

  it('should show closed pr or issue on close tab click', async () => {
    const closedTab = wrapper.find('.tab--closed');
    await closedTab.trigger('click');
    expect(wrapper.vm.activeTab).toBe(TABS.CLOSED);
  });

  it.each(labels)(
    'should show menu for Label, Milestones and Sort',
    async (accessor, target) => {
      const dropdown_label = wrapper.find(accessor);
      await dropdown_label.trigger('click');
      const dropdown_menu = wrapper.find(target);
      expect(dropdown_menu.exists()).toBeTruthy();
    },
  );
});
