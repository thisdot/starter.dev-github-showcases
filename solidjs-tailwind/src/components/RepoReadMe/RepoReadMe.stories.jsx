import { Router } from '@solidjs/router';
import { RepoProvider } from '../../contexts/RepoContext';
import RepoReadMe from './RepoReadMe';
import { mockReadme } from '../../../msw/mockReadMe';

export default {
  title: 'Components/RepoReadMe',
  parameters: {
    msw: {
      handlers: [mockReadme]
    },
  },
};

const Template = () => (
  <Router>
    <RepoProvider>
      <RepoReadMe />
    </RepoProvider>
  </Router>
);

export const Default = Template.bind({});
