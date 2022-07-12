import { shallowMount } from '@vue/test-utils';
import { IssuesPullRequestsCard } from '@/components';

describe('IssuesPullRequestsCard', () => {
  const wrapper = shallowMount(IssuesPullRequestsCard, {
    props: {
      cardType: 'issue',
      state: 'open',
      author: 'AllanJeremy',
      title: 'Save the last dance',
      url: '#',
      commentCount: 3,
      number: 121,
      createdAt: new Date(),
    },
  });

  it('should mount without errors', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
