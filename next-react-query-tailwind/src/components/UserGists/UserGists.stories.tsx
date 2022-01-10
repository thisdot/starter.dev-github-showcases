import { Story, Meta } from '@storybook/react';
import UserGists from './UserGists.data';
import { mockUserGistsQuery } from './UserGists.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: UserGists,
  title: 'Dashboard/UserGists',
  parameters: {
    msw: [mockUserGistsQuery],
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

const Template: Story = () => <UserGists />;

export const Default = Template.bind({});
