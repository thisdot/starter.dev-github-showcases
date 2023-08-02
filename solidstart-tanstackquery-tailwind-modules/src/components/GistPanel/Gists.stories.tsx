import { Router } from '@solidjs/router';
import { GistsData } from './';
import { GistsDataProps } from './GistsData';
import { gists } from './data';

export default {
  title: 'Component/Gist Panel',
};

const Template = (args: GistsDataProps) => (
  <Router>
    <GistsData {...args} />
  </Router>
);

export const Default: any = Template.bind({});
Default.args = {
  gists: gists,
};
