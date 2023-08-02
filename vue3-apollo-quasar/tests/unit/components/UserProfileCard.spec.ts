import { shallowMount } from '@vue/test-utils';
import { UserProfileCard } from '@/components';
import { createTestingPinia } from '@pinia/testing';

jest.mock('@vue/apollo-composable', () => {
  const testData = {
    value: {
      name: 'Jerry Hogan',
      avatarUrl: 'https://avatars.githubusercontent.com/u/28502531?v=4',
      login: 'hdjerry',
      websiteUrl: 'https://music-jerryhogan.vercel.app/',
      bio: 'I am a Front-End Developer with about 4 years plus of experience and with a very good knowledge of JavaScript, Vue, React, Tailwind, Styled component',
      organizations: {
        nodes: [
          {
            login: 'This Dot',
            avatarUrl:
              'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
            url: '',
          },
          {
            login: 'This Dot',
            avatarUrl:
              'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
            url: '',
          },
          {
            login: 'This Dot',
            avatarUrl:
              'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
            url: '',
          },
        ],
      },
      location: 'Lagos, Nigeria',
      company: 'This Dot',
      stars: 5,
      twitterUsername: 'iamjerry_hogan',
      followers: {
        totalCount: 10,
      },
      following: {
        totalCount: 10,
      },
      starredRepositories: {
        totalCount: 5,
      },
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
