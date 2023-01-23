import { Router } from '@solidjs/router';
import { RepoAboutWidget } from './RepoAbout';
import { RepoProvider } from '../../contexts/RepoContext';
import { mockRepoInfo } from '../../../msw/mockRepoInfo';
export default {
  title: 'Components/RepoAboutWidget',
  parameters: {
    msw: {
      handlers: {
        repoAbout: mockRepoInfo,
      },
    },
  },
};

const Template = () => (
    <Router>
      <RepoProvider>
        <RepoAboutWidget />
      </RepoProvider>
    </Router>
);

export const Default = Template.bind({});

