import type { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import UserRepos from './UserRepos.data';
import { mockUserReposQuery } from './UserRepos.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: UserRepos,
  title: 'ProfilePage/UserRepos',
  parameters: {
    msw: [mockUserReposQuery],
  },
  decorators: [
    (Story: StoryFn) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
} as Meta;

export const Default = {
  args: {
    username: 'testuser',
  },
};

export const ErrorMessage = {
  args: {
    username: 'somethingbroken',
  },
};
