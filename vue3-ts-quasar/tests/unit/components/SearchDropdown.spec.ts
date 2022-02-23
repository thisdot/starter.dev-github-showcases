import { shallowMount } from '@vue/test-utils';
import { QItem, QSeparator, QList, QBtnDropdown, ClosePopup } from 'quasar';
import { SearchDropdowns } from '@/components';

describe('SearchDropdown', () => {
  it.todo('should mount without error');
  it('should mount', async () => {
    const wrapper = shallowMount(SearchDropdowns, {
      props: {
        dropdownType: 'type',
      },
      global: {
        components: {
          QItem,
          QSeparator,
          QList,
          QBtnDropdown,
        },
        directives: {
          ClosePopup,
        },
      },
    });
    expect(wrapper).toBeTruthy();
    const dropdown = wrapper.find('.github_details');
    expect(dropdown.find('summary')).toBeTruthy();
  });
});
