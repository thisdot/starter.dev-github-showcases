import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
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

const Template: Story<ComponentProps<typeof UserRepos>> = (args) => (
  <UserRepos {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: 'testuser',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  username: 'somethingbroken',
};
