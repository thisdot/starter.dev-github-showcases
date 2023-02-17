import { Router } from '@solidjs/router';
import { Profile } from '~/types/user-profile-type';
import { userProfileMockedData } from './data.js';
import UserProfile from '.';

export default {
  title: 'Components/User Profile Card',
  component: UserProfile,
};

const Template = (args: Profile) => (
  <Router>
    <UserProfile {...args} />
  </Router>
);

export const Default: any = Template.bind({});

Default.args = {
  ...userProfileMockedData,
};
