import { Story, Meta } from '@storybook/react';
import UserTopRepos from './UserTopRepos.data';
import { mockUserTopReposQuery } from './UserTopRepos.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: UserTopRepos,
  title: 'Dashboard/UserTopRepos',
  parameters: {
    msw: [mockUserTopReposQuery],
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

const Template: Story = () => <UserTopRepos />;

export const Default = Template.bind({});
