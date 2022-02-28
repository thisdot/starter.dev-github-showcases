import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import ProfilePage from './ProfilePage.view';

const exampleData = {
  repos: [
    {
      id: 'R_kgDOGm5gfw',
      name: 'krypto-swap-smart_contract',
      description: null,
      stargazerCount: 1,
      forkCount: 0,
      languageColor: '#f1e05a',
      language: 'JavaScript',
      isPrivate: false,
      isArchived: false,
      isFork: false,
      updatedAt: '2022-02-01T08:34:58Z',
    },
    {
      id: 'test',
      name: 'krypto-swap-smart_contract',
      description: null,
      stargazerCount: 1,
      forkCount: 0,
      languageColor: '#f1e05a',
      language: 'JavaScript',
      isPrivate: false,
      isArchived: false,
      isFork: false,
      updatedAt: '2022-02-01T08:34:58Z',
    },
  ],
  pageInfo: {
    endCursor: 'Y3Vyc29yOnYyOpK5MjAxNy0wMi0wMlQxMTowOTowNC0wODowMM4E0D8s',
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMi0xNVQxNDo1OTo0Mi0wODowMM4KYGH6',
  },
};

const exampleData2 = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/2487968?v=4',
  bio: 'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="https://github.com/thisdot">@thisdot</a>',
  company: '@thisdot',
  followers: { totalCount: 24 },
  following: { totalCount: 20 },
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
  component: ProfilePage,
  title: 'ProfilePage/UserProfilePage',
} as Meta;

const Template: Story<ComponentProps<typeof ProfilePage>> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: exampleData2,
  repos: exampleData,
  owner: 'vyktoremario',
};
