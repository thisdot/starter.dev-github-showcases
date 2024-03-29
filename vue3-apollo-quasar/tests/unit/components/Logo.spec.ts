import { shallowMount } from '@vue/test-utils';
import { Logo } from '@/components';

const DEFAULT_LOGO_SIZE_PX = 32;

const testData = {
  to: { type: String, default: '/' },
  dark: { type: Boolean, default: true }, //? Is the logo on a dark background?
  size: { type: Number, default: DEFAULT_LOGO_SIZE_PX },
  darkImg: { type: String, default: 'logos/gh-logo-dark-bg.svg' },
  darkLgImg: { type: String, default: 'logos/gh-logo-lg-dark-bg.svg' },
  lightLgImg: { type: String, default: 'logos/gh-logo-lg-light-bg.svg' },
  lightImg: { type: String, default: 'logos/gh-logo-light-bg.svg' },
};

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('Logo', () => {
  it('should mount', () => {
    const wrapper = shallowMount(Logo, {
      props: {
        ...testData,
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
