import { Router } from '@solidjs/router';
import UserRepos from './UserRepos';
import { repoCardProps } from '../RepoCard/data';

export default {
  title: 'Components/User Repos',
  component: UserRepos,
  argTypes: {
   repos: {},
  },
};

const Template = (args) => (
  <Router>
    <UserRepos {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  repos: [repoCardProps, repoCardProps],
};
