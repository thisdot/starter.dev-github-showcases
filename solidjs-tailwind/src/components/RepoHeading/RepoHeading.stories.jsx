import RepoHeading from './RepoHeading';

const args = {
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

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
};

const Template = (args) => <RepoHeading {...args} />;

export const Public = Template.bind({});
Public.args = args;

export const Private = Template.bind({});
Private.args = {
  ...args,
  data: {
    ...args.data,
    isPrivate: true,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  ...args,
  data: undefined,
};
