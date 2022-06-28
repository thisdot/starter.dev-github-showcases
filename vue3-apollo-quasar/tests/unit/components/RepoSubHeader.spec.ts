import { shallowMount } from '@vue/test-utils';
import { RepoSubHeader } from '@/components';

describe('RepoSubHeader', () => {
  it.todo('should mount without errors');
  it.todo('should mount show forks drop down and click a list item');

  it('should mount without errors', () => {
    const wrapper = shallowMount(RepoSubHeader, {
      components: {},
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

    expect(wrapper.vm).toBeTruthy();
  });
});
