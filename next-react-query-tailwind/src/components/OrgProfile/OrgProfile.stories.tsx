import type { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import OrgProfile from './OrgProfile.data';
import { mockOrgProfileQuery } from './OrgProfile.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: OrgProfile,
  title: 'ProfilePage/OrgProfile',
  parameters: {
    msw: [mockOrgProfileQuery],
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
    username: 'vercel',
  },
};
