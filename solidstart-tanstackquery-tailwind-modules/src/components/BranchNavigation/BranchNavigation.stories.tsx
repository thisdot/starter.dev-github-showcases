import { Router } from '@solidjs/router';
import BranchNavigation from './BranchNavigation';

export default {
  title: 'Components/Branch Navigation',
  component: BranchNavigation,
};

const Template = () => (
  <Router>
      <BranchNavigation branch='main' />
  </Router>
);

export const RepoRoot = Template.bind({});
