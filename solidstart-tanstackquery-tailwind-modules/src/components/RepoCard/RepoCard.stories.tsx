import RepoCard from './RepoCard';
import { repoCardMockedData } from './data';
import { Router } from '@solidjs/router';


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

const Template = (args: any) => (
  <Router>
    <RepoCard {...args} />
  </Router>
);

export const Default: any = Template.bind({});

Default.args = {
  ...repoCardMockedData,
};
