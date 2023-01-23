import { Router } from '@solidjs/router';
import RepoHeading from './RepoHeading';
import { RepoProvider } from '../../contexts/RepoContext';
import { mockRepoInfo } from '../../../msw/mockRepoInfo';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
};

const Template = () => (
  <Router>
    <RepoProvider>
     <RepoHeading />
    </RepoProvider>
  </Router>
);

export const Public = Template.bind({});
Public.parameters = {
  msw: {
    handlers: {
      repoHeading: mockRepoInfo,
    },
  },
};
