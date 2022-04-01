import type { Story, ComponentStory, ComponentMeta } from '@storybook/react';
import TabNavigation from './TabNavigation';
import { UserIcon, ClipboardListIcon } from '@heroicons/react/outline';

export default {
  component: TabNavigation,
  title: 'Components/TabNavigation',
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
  pathname: ''
};
