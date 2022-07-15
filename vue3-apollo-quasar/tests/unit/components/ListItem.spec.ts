import { mount } from '@vue/test-utils';
import ListItem from '@/components/RepoSubHeader/ListItem.vue';

describe('ListItem', () => {
  const wrapper = mount(ListItem);

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
