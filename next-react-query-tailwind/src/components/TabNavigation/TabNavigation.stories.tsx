import type { Story, ComponentStory, ComponentMeta } from '@storybook/react';
import TabNavigation from './TabNavigation';
import { createWrapper } from '@lib/testUtils';
import { UserIcon, ClipboardListIcon } from '@heroicons/react/outline';

export default {
  component: TabNavigation,
  title: 'Components/TabNavigation',
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
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {},
    },
  },
} as ComponentMeta<typeof TabNavigation>;

const Template: ComponentStory<typeof TabNavigation> = (args) => (
  <TabNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: 'Profile',
      path: '',
      Icon: UserIcon,
    },
    {
      title: 'Repos',
      Icon: ClipboardListIcon,
    },
  ],
};
