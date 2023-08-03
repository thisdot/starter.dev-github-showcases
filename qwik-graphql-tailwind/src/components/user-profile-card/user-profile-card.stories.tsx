import { Meta } from '@storybook/html';
import { User } from '../../routes/[user]/types';
import { UserProfileCard } from './user-profile-card';

export default {
  title: 'User Profile Card',
} as Meta;

const Template = (args: User) => <UserProfileCard {...args} />;

export const Demo: any = Template.bind({
  organzations: [],
});

Demo.args = {
  avatarUrl: '//avatars.githubusercontent.com/u/11267785?v=4',
  bio: 'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="//github.com/thisdot">@thisdot</a>',
  company: '@thisdot',
  followers: { totalCount: 24 },
  following: { totalCount: 20 },
  starredRepositories: { totalCount: 3 },
  location: 'Prague, Czechia',
  login: 'honzikec',
  name: 'Jan Kaiser',
  twitterUsername: 'honzikec',
  websiteUrl: 'https://jankaiser.cz',
  organizations: {
    nodes: [
      {
        avatarUrl: '//avatars.githubusercontent.com/u/22839396?v=4',
        login: 'thisdot',
      },
    ],
  },
};
