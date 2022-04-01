import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
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
    (Story: Story) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
} as Meta;

const Template: Story<ComponentProps<typeof UserProfile>> = (args) => (
  <UserProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: 'testuser',
};
