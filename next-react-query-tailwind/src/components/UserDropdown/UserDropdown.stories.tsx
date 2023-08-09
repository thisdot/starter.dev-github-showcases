import { StoryFn, Meta } from '@storybook/react';
import UserDropdown from './UserDropdown.data';
import { mockCurrentUserQuery } from './UserDropdown.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: UserDropdown,
  title: 'components/UserDropdown',
  parameters: {
    msw: [mockCurrentUserQuery],
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
  render: (args: typeof UserDropdown) => (
    <div className="bg-gray-900">
      <UserDropdown {...args} />
    </div>
  ),

  args: {
    image: 'https://avatars2.githubusercontent.com/u/17098?v=4',
  },
};
