import RepoHeading from './RepoHeading';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
};

const Template = (args) => <RepoHeading {...args} />;

export const Public = Template.bind({});
Public.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};

export const Private = Template.bind({});
Private.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  data: {
    isPrivate: true,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: true,
  data: undefined,
};
