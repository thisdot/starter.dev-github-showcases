import { mount } from '@vue/test-utils';
import { IssueTabView } from '@/components';

describe('IssueTabView', () => {
  const wrapper = mount(IssueTabView);

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
