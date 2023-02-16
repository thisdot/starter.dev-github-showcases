import { Router } from '@solidjs/router';
import { UserProfileProps } from '~/types/user-profile-type.js';
import { userProfileMockedData } from './data.js';
import UserProfile from '.';

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
