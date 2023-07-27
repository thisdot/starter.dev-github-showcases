import { component$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
import { storybookMockRouting } from '../../utils';
import { UserReposProps } from './types';
import { UserRepos } from './user-repos';

const UserReposDemoComponent = component$((props: UserReposProps) => {
  storybookMockRouting();
  return <UserRepos {...props} />;
});

export default {
  title: 'User Repos',
} as Meta;

const Template = (args: UserReposProps) => <UserReposDemoComponent {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  repos: {
    nodes: [
      {
        id: 'MDEwOlJlcG9zaXRvcnkxMjM0NzUxMjM=',
        name: 'qwik',
        description: 'Qwik is a framework for building fast, lightweight, and maintainable web applications.',
        isArchived: false,
        isPrivate: false,
        primaryLanguage: {
          id: 'MDg6TGFuZ3VhZ2UxNzI=',
          name: 'TypeScript',
          color: '#2b7489',
        },
        url: 'qwik',
        updatedAt: '2019-01-17T23:41:24Z',
      },
      {
        name: 'qwik-starter-kit',
        description:
          'Qwik Starter Kit is a template for building fast, lightweight, and maintainable web applications.',
        url: 'qwik-starter-kit',
        isArchived: false,
        isPrivate: false,
        primaryLanguage: {
          id: 'MDg6TGFuZ3VhZ2UxNzI=',
          name: 'TypeScript',
          color: '#2b7489',
        },
        updatedAt: '2019-01-17T23:41:24Z',
      },
    ],
    pageInfo: {
      endCursor: undefined,
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: undefined,
    },
  },
  owner: 'honzikec',
};
