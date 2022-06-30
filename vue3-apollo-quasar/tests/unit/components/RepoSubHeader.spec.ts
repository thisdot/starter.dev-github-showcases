import { mount } from '@vue/test-utils';
import { RepoSubHeader } from '@/components';
import ListItem from '@/components/RepoSubHeader/ListItem.vue';
// import RepoSubHeaderExperiment from '@/components/RepoSubHeader/RepoSubHeaderExperiment.vue';

describe('RepoSubHeader', () => {
  const wrapper = mount(RepoSubHeader, {
    props: {
      username: 'thisdot',
      repoName: 'starter.dev-github-showcases',
      visibilityTag: 'Public',
      stars: 100,
      watches: 30,
      forks: 1,
      issuesCount: 10,
      pullRequestsCount: 10,
    },
  });

  const btnWithOptions = wrapper.findAll('.menu__btn');

  it('should mount without errors', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  let count = 0;
  it.each(btnWithOptions)(
    'should show options on button click',
    async (btn) => {
      const toggleWatchMenu = jest.spyOn(wrapper.vm, 'toggleWatchMenu');
      const toggleStarsMenu = jest.spyOn(wrapper.vm, 'toggleStarsMenu');
      if (count === 0) {
        expect(wrapper.vm.refWatchMenu).toBe(false);
      } else {
        expect(wrapper.vm.refStarsMenu).toBe(false);
      }
      await btn.trigger('click');
      if (count === 0) {
        expect(toggleWatchMenu).toHaveBeenCalled();
        expect(wrapper.vm.refWatchMenu).toBe(true);
      } else {
        expect(toggleStarsMenu).toHaveBeenCalled();
        expect(wrapper.vm.refStarsMenu).toBe(true);
      }

      const menu = await wrapper.find('.dropdown_menu.q-menu');
      expect(menu).toBeTruthy();
      count = count + 1;
    },
  );
  count = 0;

  it.each(btnWithOptions)(
    'should close option when closed button is clicked',
    async (btn) => {
      await btn.trigger('click');

      const menu = await wrapper.find('.dropdown_menu.q-menu');
      const closeBtn = menu.find('.close-btn');
      await closeBtn.trigger('click');
      if (count === 0) {
        expect(wrapper.vm.refWatchMenu).toBe(false);
      } else {
        expect(wrapper.vm.refStarsMenu).toBe(false);
      }
      count = count + 1;
    },
  );

  count = 0;

  it('should select an item from the fork option list', async () => {
    const notifyOptioons = ['mentions', 'all', 'ignore', 'custom'];
    const watchBtn = wrapper.find('.menu__btn');
    await watchBtn.trigger('click');

    const menu = await wrapper.find('.dropdown_menu.q-menu');
    expect(wrapper.vm.notify).toBe(notifyOptioons[1]);
    const listItems = menu.findAllComponents(ListItem);
    await listItems[0].trigger('click');
    expect(wrapper.vm.notify).toBe(notifyOptioons[0]);
  });
});
