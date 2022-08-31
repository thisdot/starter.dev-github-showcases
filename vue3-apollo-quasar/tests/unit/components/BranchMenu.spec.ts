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
});
