import { mount } from '@vue/test-utils';
import { PullRequestTabView } from '@/components';

describe('PullRequestTabView', () => {
  it('should mount', () => {
    const wrapper = mount(PullRequestTabView);
    expect(wrapper.vm).toBeTruthy();
  });
});
