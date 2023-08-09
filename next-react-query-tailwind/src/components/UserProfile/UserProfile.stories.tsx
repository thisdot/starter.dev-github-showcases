import type { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import UserProfile from './UserProfile.data';
import { mockUserProfileQuery } from './UserProfile.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: UserProfile,
  title: 'ProfilePage/UserProfile',
  parameters: {
    msw: [mockUserProfileQuery],
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
