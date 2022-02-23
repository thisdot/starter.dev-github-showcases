import { shallowMount } from '@vue/test-utils';
import { UserProfileCard } from '@/components';

const testData = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/28502531?v=4',
  name: 'Jerry Hogan',
  login: 'hdjerry',
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
  bioLink: 'https://music-jerryhogan.vercel.app/',
  organization: 'This Dot',
  stars: 5,
};

describe('UserProfileCard', () => {
  it.todo('Mount Component without error');
  it('should mount', () => {
    const wrapper = shallowMount(UserProfileCard, {
      props: {
        ...testData,
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
