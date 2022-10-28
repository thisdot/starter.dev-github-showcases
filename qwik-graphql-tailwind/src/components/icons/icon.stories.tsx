import { Meta } from '@storybook/html';
import { LinkIcon } from './link.icon';
import { IconProps } from './types';

export default {
  title: 'Icon',
} as Meta;

const Template = (args: IconProps) => (
  <p>
    Example of an icon: <LinkIcon {...args} />
  </p>
);

export const Demo: any = Template.bind({});

Demo.args = {
  className: 'w-8 h-8 fill-blue-500 ',
};
