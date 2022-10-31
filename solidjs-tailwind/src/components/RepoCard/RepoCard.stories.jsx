import { Router } from '@solidjs/router';
import { RepoCard } from '.';
import { repoCardProps } from './data';

export default {
  title: 'Components/Repo Card',
  component: RepoCard,
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
    <RepoCard {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  ...repoCardProps,
};
