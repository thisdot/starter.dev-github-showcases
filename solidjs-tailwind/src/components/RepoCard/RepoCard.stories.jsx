import { Router } from '@solidjs/router';
import { RepoCard } from '.';

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
  name: 'cowrywise-unsplashed',
  owner: { login: 'hdjerry' },
  isProfilePage: true,
  stargazerCount: 2,
  visibility: 'Private',
  primaryLanguage: {
    color: 'yellow',
    name: 'Javascript',
  },
  description:
    'Using basic pull requests to add your name and github link to BE A MEMBER of ZTM-ng',
  updatedAt: '23 Sep 2020',
};
