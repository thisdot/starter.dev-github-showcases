import { mount } from '@vue/test-utils';
import { RepoSubHeader } from '@/components';
import ListItem from '@/components/RepoSubHeader/ListItem.vue';
import { NOTIFICATIONS } from '@/components/RepoSubHeader/data';

describe('RepoSubHeader', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(RepoSubHeader, {
      props: {
        username: 'thisdot',
        repoName: 'starter.dev-github-showcases',
        visibilityTag: 'Public',
        stars: 100,
        watch: 30,
        forks: 1,
        issuesCount: 10,
        pullRequestsCount: 10,
      },
    });
  });

  const btnWithOptions = [
    ['.menu_btn--watch', '.dropdown_menu--watch'],
    ['.menu_btn--star', '.dropdown_menu--star'],
  ];

  it('should mount without errors', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it.each(btnWithOptions)(
    'should show options on button click',
    async (accessor, target) => {
      const menu_btn = await wrapper.find(accessor);
      let dropdown_menu = await wrapper.find(target);
      expect(dropdown_menu.exists()).toBeFalsy();
      await menu_btn.trigger('click');
      dropdown_menu = await wrapper.find(target);
      expect(dropdown_menu.exists()).toBeTruthy();
    },
  );

  it.each(btnWithOptions)(
    'should close option when closed button is clicked',
    async (accessor, target) => {
      const menu_btn = await wrapper.find(accessor);
      await menu_btn.trigger('click');
      let dropdown_menu = await wrapper.find(target);
      const closeBtn = dropdown_menu.find('.close-btn');
      await closeBtn.trigger('click');
      dropdown_menu = await wrapper.find(target);
      expect(dropdown_menu.exists()).toBeFalsy();
    },
  );

  it('should select an item from the watch option list', async () => {
    const watchBtn = wrapper.find('.menu_btn--watch');
    await watchBtn.trigger('click');

    const menu = await wrapper.find('.dropdown_menu--watch');
    expect(wrapper.vm.notify).toBe(NOTIFICATIONS.all);
    const listItems = menu.findAllComponents(ListItem);
    await listItems[0].trigger('click');
    expect(wrapper.vm.notify).toBe(NOTIFICATIONS.mentions);
  });
});
