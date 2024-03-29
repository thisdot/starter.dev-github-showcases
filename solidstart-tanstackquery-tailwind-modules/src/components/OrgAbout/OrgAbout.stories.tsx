import { Router } from '@solidjs/router';
import { orgData } from './data';
import OrgAbout from './OrgAbout';

export default {
  title: 'Components/Org About',
  component: OrgAbout,
  argTypes: {
    name: {},
    avatarUrl: {},
  },
};

const Template = (args: any) => (
  <Router>
    <OrgAbout {...args} />
  </Router>
);

export const Default: any = Template.bind({});

Default.args = {
  ...orgData,
};
