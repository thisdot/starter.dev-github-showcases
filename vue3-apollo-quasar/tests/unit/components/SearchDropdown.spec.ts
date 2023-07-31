import { shallowMount } from '@vue/test-utils';
import { SearchDropdowns } from '@/components';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('SearchDropdown', () => {
  it('should mount', async () => {
    const wrapper = shallowMount(SearchDropdowns, {
      props: {
        dropdownType: 'type',
      },
    });
    expect(wrapper).toBeTruthy();
    const dropdown = wrapper.find('.github_details');
    expect(dropdown.find('summary')).toBeTruthy();
  });
});
