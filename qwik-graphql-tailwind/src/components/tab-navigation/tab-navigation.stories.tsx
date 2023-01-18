import { component$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
// import { storybookMockRouting } from '../../utils';
import { GitRepoIcon, StarIcon } from '../icons';
import TabNavigation, { TabNavigationProps } from './tab-navigation';

const TabNavigationDemoComponent = component$(({ tabs, pathname }: TabNavigationProps) => {
  // storybookMockRouting();
  return <TabNavigation tabs={tabs} pathname={pathname} />;
});

export default {
  title: 'Tab Navigation',
} as Meta;

const Template = (args: any) => <TabNavigationDemoComponent {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  tabs: [
    {
      title: 'Repos',
      path: 'repos',
      Icon: GitRepoIcon,
    },
    {
      title: 'Stars',
      path: 'stars',
      Icon: StarIcon,
    },
  ],
  pathname: 'stars',
};
