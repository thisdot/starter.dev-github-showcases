import { Router } from '@solidjs/router';
import RepoCard from './RepoCard';
import { repoCardProps } from './data';

export default {
  title: 'Components/Repo Card',
  component: RepoCard,
  argTypes: {
    name: '',
    owner: {},
    isProfilePage: '',
    stargazerCount: '',
    visibility: '',
    primaryLanguage: {},
    description: '',
    updatedAt: '',
  },
};

const Template = (args) => (
  <Router>
    <RepoCard {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  ...repoCardProps,
};
