import { Meta } from '@storybook/html';
import { Gists } from '.';
import { mockedGistsQuery } from '~/mock/mockedGists';

export default {
  title: 'Gists',
} as Meta;

const Template = (args: any) => <Gists {...args} />;

export const Demo: any = Template.bind({});

Demo.parameters = {
  msw: {
    handlers: [mockedGistsQuery],
  },
};
