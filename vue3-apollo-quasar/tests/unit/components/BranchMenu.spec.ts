import { BranchMenu } from '@/components';
import { mount } from '@vue/test-utils';

describe('Branch Menu', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(BranchMenu, {
      props: {
        branches: [
          { name: 'main', default: true },
          { name: 'Alpha', default: false },
          { name: 'Omega', default: false },
          { name: 'Trenches', default: false },
        ],
      },
    });
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show options on click of dropdown button', async () => {
    const dropdown_btn = wrapper.find('q-btn-dropdown');
    const toggleOptions = (wrapper.vm.toggleOptions = jest.fn());
    await dropdown_btn.trigger('click');
    expect(toggleOptions).toBeCalled();
    const dropdown_list = await wrapper.find('.branch-dropdown');
  });
});
