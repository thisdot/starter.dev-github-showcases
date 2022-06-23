import { shallowMount } from '@vue/test-utils';
import { UserProfileCard } from '@/components';
import { createTestingPinia } from '@pinia/testing';

jest.mock('@vue/apollo-composable', () => {
  const testData = {
    value: {
      name: 'Jerry Hogan',
      avatarUrl: 'https://avatars.githubusercontent.com/u/28502531?v=4',
      login: 'hdjerry',
      bioLink: 'https://music-jerryhogan.vercel.app/',
      bio: 'I am a Front-End Developer with about 3 years plus of experience and with a very good knowledge of JavaScript, Vue, React, Tailwind, Styled component',
      following: 17,
      follower: 7,
      organizations: [
        {
          name: 'This Dot',
          avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
      ],
      location: 'Lagos, Nigeria',
      organization: 'This Dot',
      stars: 5,
    },
  };
  const data = {
    result: {
      user: testData,
    },
    loading: false,
  };
  return {
    useQuery: jest.fn(() => data),
    useResult: jest.fn(() => testData),
  };
});

describe('UserProfileCard', () => {
  it('should have username prop', () => {
    const wrapper = shallowMount(UserProfileCard, {
      global: { plugins: [createTestingPinia()] },
      props: {
        username: 'hdjerry',
      },
    });

    expect(wrapper.vm.username).toBeTruthy();
  });
  it('should mount', () => {
    const wrapper = shallowMount(UserProfileCard, {
      global: { plugins: [createTestingPinia()] },
      props: {
        username: 'hdjerry',
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
