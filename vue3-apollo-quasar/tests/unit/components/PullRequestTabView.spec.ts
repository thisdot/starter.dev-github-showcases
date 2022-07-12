import { mount } from '@vue/test-utils';
import { PullRequestTabView } from '@/components';

describe('PullRequestTabView', () => {
  const wrapper = mount(PullRequestTabView);

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
