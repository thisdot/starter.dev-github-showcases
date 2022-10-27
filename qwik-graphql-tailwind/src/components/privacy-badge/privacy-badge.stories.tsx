import { Meta } from '@storybook/html';
import { PrivacyBadge, PrivacyBadgeProps } from './privacy-badge';

export default {
  title: 'Privacy Badge',
} as Meta;

const Template = (args: PrivacyBadgeProps) => <PrivacyBadge {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  isPrivate: true,
  className: 'text-red-500',
};
