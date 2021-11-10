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
          <ErrorBoundaryTestComponent>
            <Story />
          </ErrorBoundaryTestComponent>
        </Wrapper>
      );
    },
  ],
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <FileExplorer />
  </RepoProvider>
);

export const RootDir = Template.bind({});
RootDir.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: '',
};

export const SrcDir = Template.bind({});
SrcDir.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'src',
};

export const BadPathError = Template.bind({});
BadPathError.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'bad/path',
};
