import { mount } from '@vue/test-utils';
import { IssueTabView } from '@/components';

describe('IssueTabView', () => {
  it('should mount', () => {
    const wrapper = mount(IssueTabView);
    expect(wrapper.vm).toBeTruthy();
  });
});
