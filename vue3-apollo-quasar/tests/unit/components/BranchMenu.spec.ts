import { BranchMenu } from '@/components';
import { mount } from '@vue/test-utils';

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

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
