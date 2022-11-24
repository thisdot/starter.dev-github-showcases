import { Router } from '@solidjs/router';
import OrgAbout from './OrgAbout';


export default {
  title: 'Components/Org About',
  component: OrgAbout,
  argTypes: {
    name: {},
    description: {},
    primaryLanguage: {},
    owner: {},
    isProfilePage: {},
    stargazerCount: {},
  },
};

const Template = (args) => (
  <Router>
    <OrgAbout {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/1024025?v=4',
  name: 'This Dot',
};
