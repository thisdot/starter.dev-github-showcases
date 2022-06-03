import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
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

const Template: Story<ComponentProps<typeof OrgProfile>> = (args) => (
  <OrgProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: 'vercel',
};
