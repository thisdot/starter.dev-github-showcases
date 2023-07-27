import { Router } from '@solidjs/router';
import RepoNavigation from './BranchNavigation';
import { RepoProvider } from '../../contexts/RepoContext';
import { mockRepoInfo } from '../../../msw/mockRepoInfo';

export default {
  title: 'Components/Branch Navigation',
  component: RepoNavigation,
  parameters: {
    msw: {
      handlers: [mockRepoInfo],
    },
  },
};

const Template = () => (
  <Router>
    <RepoProvider>
      <RepoNavigation />
    </RepoProvider>
  </Router>
);

export const RepoRoot = Template.bind({});
