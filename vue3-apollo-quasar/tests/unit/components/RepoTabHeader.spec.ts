import { mount } from '@vue/test-utils';
import RepoTabHeader from '@/components/RepoSubHeader/RepoTabHeader.vue';
import { TABS } from '@/components/RepoSubHeader/data';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('RepoTabHeader', () => {
  let wrapper;

  beforeAll(async () => {
    wrapper = mount(RepoTabHeader, {
      props: {
        issuesCount: 10,
        pullRequestsCount: 10,
      },
    });
  });

  it('should mount without errors', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it.each([
    ['.repo-tab_code', TABS.CODE],
    ['.repo-tab_issues', TABS.ISSUES],
    ['.repo-tab_pull-requests', TABS.PULL_REQUESTS],
  ])('should change active tab', async (accessor, expectation) => {
    const tab = await wrapper.find(accessor);
    await tab.trigger('click');
    expect(wrapper.vm.activeTab).toEqual(expectation);
  });
});
