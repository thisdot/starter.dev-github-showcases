import { shallowMount } from '@vue/test-utils';
import { IssuesPullRequestsCard } from '@/components';

describe('IssuesPullRequestsCard', () => {
  it('should mount without errors', () => {
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
    expect(wrapper.vm).toBeTruthy();
  });
});
