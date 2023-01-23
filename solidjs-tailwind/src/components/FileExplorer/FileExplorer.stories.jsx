import { Router } from '@solidjs/router';
import FileExplorer from './FileExplorer';
import { RepoProvider } from '../../contexts/RepoContext';
import { mockRepoInfo } from '../../../msw/mockRepoInfo';

export default {
  title: 'Components/File Explorer',
  component: FileExplorer,
};

const Template = () => (
  <Router>
    <RepoProvider>
      <FileExplorer />
    </RepoProvider>
  </Router>
);

export const RootDir = Template.bind({});
RootDir.parameters = {
  msw: {
    handlers: {
      fileExplorer: mockRepoInfo,
    },
  },
};
