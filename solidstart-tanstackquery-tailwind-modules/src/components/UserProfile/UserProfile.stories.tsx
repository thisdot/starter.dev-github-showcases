import { Router } from '@solidjs/router';
import UserProfile, { UserProfileProps } from '.';
import { userProfileMockedData } from './data.js';

export default {
  title: 'Components/User Profile Card',
  component: UserProfile,
};

const Template = (args: UserProfileProps) => (
  <Router>
    <UserProfile {...args} />
  </Router>
);

export const Default: any = Template.bind({});

Default.args = {
  ...userProfileMockedData,
};
