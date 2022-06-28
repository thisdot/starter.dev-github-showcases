import { shallowMount } from '@vue/test-utils';
import { RepoSubHeader } from '@/components';

describe('RepoSubHeader', () => {
  it.todo('should mount without errors');
  it.todo('should mount show forks drop down and click a list item');
  const wrapper = shallowMount(RepoSubHeader, {
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
    const forkBtn = wrapper.find
  })
});
