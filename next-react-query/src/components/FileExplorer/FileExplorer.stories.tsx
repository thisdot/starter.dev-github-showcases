import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import FileExplorer from './FileExplorer.data';
import { mockRepoTreeQuery } from './FileExplorer.mocks';
import { createWrapper, ErrorBoundaryTestComponent } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: FileExplorer,
  title: 'RepoPage/FileExplorer',
  parameters: {
    msw: [mockRepoTreeQuery],
  },
  decorators: [
    (Story: Story) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <ErrorBoundaryTestComponent>
    <RepoProvider value={args}>
      <FileExplorer />
    </RepoProvider>
  </ErrorBoundaryTestComponent>
);

export const ExplorerRootDir = Template.bind({});
ExplorerRootDir.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: '',
};

export const ExplorerSrcDir = Template.bind({});
ExplorerSrcDir.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'src',
};

export const ExplorerBadPathError = Template.bind({});
ExplorerBadPathError.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'bad/path',
};
