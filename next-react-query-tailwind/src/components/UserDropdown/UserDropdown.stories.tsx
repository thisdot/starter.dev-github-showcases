import { Story, Meta } from '@storybook/react';
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

const Template: Story<typeof UserDropdown> = (args) => (
  <div className="bg-gray-900">
    <UserDropdown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  image: 'https://avatars2.githubusercontent.com/u/17098?v=4',
};
