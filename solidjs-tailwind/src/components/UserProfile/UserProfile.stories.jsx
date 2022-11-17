import { Router } from '@solidjs/router';
import { UserProfile } from '.';
import { userProfileProps } from './data.js';

export default {
  title: 'Components/User Profile Card',
  component: UserProfile,
};

const Template = (args) => (
  <Router>
    <UserProfile {...args} />
  </Router>
);
export const Default = Template.bind({});

Default.args = {
  ...userProfileProps,
};
