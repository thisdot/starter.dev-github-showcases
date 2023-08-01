import { shallowMount } from '@vue/test-utils';
import { UserAvatar } from '@/components';

const testData = {
  size: 100,
  unit: 'px',
  img: 'https://place-hold.it/64x64',
};

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('UserAvatar', () => {
  it('should mount', () => {
    const wrapper = shallowMount(UserAvatar, {
      props: {
        ...testData,
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
