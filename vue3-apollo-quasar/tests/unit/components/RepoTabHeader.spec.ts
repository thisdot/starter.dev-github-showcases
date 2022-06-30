import { mount } from '@vue/test-utils';
import RepoTabHeader from '@/components/RepoSubHeader/RepoTabHeader.vue';

describe('RepoTabHeader', () => {
  const wrapper = mount(RepoTabHeader, {
    props: {
      issuesCount: 10,
      pullRequestsCount: 10,
    },
  });

  it('should mount without errors', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  const tabs = wrapper.findAll('.repo-tab');
  let count = 0;

  it.each(tabs)('should change active tab', async (tab) => {
    const tabList = ['code', 'issues', 'pullrequests']; //arranged according the display on the UI
    await tab.trigger('click');

    expect(wrapper.vm.activeTab).toEqual(tabList[count]);

    count = count + 1;
  });

  count = 0;
});
