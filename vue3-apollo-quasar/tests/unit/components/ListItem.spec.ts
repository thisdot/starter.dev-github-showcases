import { mount } from '@vue/test-utils';
import ListItem from '@/components/RepoSubHeader/ListItem.vue';

describe('ListItem', () => {
  it('should mount', () => {
    const wrapper = mount(ListItem);
    expect(wrapper.exists()).toBeTruthy();
  });
});
