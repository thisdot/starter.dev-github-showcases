import { Story, Meta } from '@storybook/react';
import LoadingBulletList from './LoadingBulletList';

export default {
  component: LoadingBulletList,
  title: 'Loading/LoadingBulletList',
} as Meta;

const Template: Story = () => <LoadingBulletList />;

export const Default = Template.bind({});
