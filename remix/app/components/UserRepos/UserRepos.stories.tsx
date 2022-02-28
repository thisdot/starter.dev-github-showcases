import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import UserRepos from './UserRepos.view';

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

export default {
  component: UserRepos,
  title: 'ProfilePage/UserRepos',
} as Meta;

const Template: Story<ComponentProps<typeof UserRepos>> = (args) => (
  <UserRepos {...args} />
);

export const Default = Template.bind({});
Default.args = {
  repos: exampleData,
  owner: 'vyktoremario',
};
