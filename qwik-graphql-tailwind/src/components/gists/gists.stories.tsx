import { Meta } from '@storybook/html';
import { mockedGistsQuery } from '../../mock/mockedGists';
import Gists from './index';

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
