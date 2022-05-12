import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import UserProfile from './UserProfile.view';

const exampleData = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/2487968?v=4',
  bio: 'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="https://github.com/thisdot">@thisdot</a>',
  company: '@thisdot',
  followers: { totalCount: 24 },
  following: { totalCount: 20 },
  starredRepositories: { totalCount: 3 },
  location: 'Washington, DC',
  login: 'tvanantwerp',
  name: 'Tom VanAntwerp',
  twitterUsername: 'tvanantwerp',
  websiteUrl: 'https://tomvanantwerp.com',
  organizations: {
    nodes: [
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
        login: 'thisdot',
      },
    ],
  },
};

export default {
  component: UserProfile,
  title: 'ProfilePage/UserProfile',
} as Meta;

const Template: Story<ComponentProps<typeof UserProfile>> = (args) => (
  <UserProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...exampleData,
};
