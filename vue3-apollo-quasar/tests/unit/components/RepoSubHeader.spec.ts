import { mount } from '@vue/test-utils';
import { RepoSubHeader } from '@/components';
import { QMenu } from 'quasar';

describe('RepoSubHeader', () => {
  it.todo('should mount without errors');
  it.todo('should mount show forks drop down and click a list item');
  const wrapper = mount(RepoSubHeader, {
    component: {
      'q-menu': QMenu,
    },
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

  it('should mount without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show fork options on forks button click', async () => {
    const watchBtn = wrapper.find('.menu__btn');
    // console.log(watchBtn);
    await watchBtn.trigger('click');

    // await watchBtn.trigger('click');
    const menu = await watchBtn.find('.dropdown_menu');
    console.log(menu);
    
  })
});
