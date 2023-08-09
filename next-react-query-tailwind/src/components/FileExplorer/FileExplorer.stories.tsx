import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
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
    (Story: StoryFn) => {
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

const Template: StoryFn<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <FileExplorer />
  </RepoProvider>
);

export const RootDir = {
  render: Template,

  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: '',
  },
};

export const SrcDir = {
  render: Template,

  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: 'src',
  },
};

export const BadPathError = {
  render: Template,

  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: 'bad/path',
  },
};
