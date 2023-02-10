import { Router } from '@solidjs/router';
import { Info } from '~/types/repo-info-type';
import { visibilityTypes } from '../RepoHeading/data';
import RepoHeader from './RepoHeader';

export default {
  title: 'components/Repo Header',
  argTypes: {
    openIssueCount: {},
    openPullRequestCount: {},
    forkCount: {},
    stargazerCount: {},
    watcherCount: {},
    visibility: {
      options: Object.values(visibilityTypes),
      control: {
        type: 'select',
      },
    },
    isOrg: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args: Info) => (
  <Router>
    <RepoHeader {...args} />
  </Router>
);

export const Default: any = Template.bind({});
Default.args = {
  openIssueCount: 10,
  openPullRequestCount: 20,
  forkCount: 3,
  stargazerCount: 23,
  watcherCount: 3,
  visibility: visibilityTypes.public,
  isOrg: false,
};
