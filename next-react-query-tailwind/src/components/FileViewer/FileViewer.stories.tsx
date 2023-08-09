import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
import FileViewer from './FileViewer.data';
import { mockRepoFileQuery } from './FileViewer.mocks';
import { createWrapper, ErrorBoundaryTestComponent } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: FileViewer,
  title: 'RepoPage/FileViewer',
  parameters: {
    msw: [mockRepoFileQuery],
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
    <FileViewer />
  </RepoProvider>
);

export const JsonFile = {
  render: Template,

  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: 'package.json',
  },
};

export const JsFile = {
  render: Template,

  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: 'src/Navigator.js',
  },
};

export const TextFile = {
  render: Template,

  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: '.buckconfig',
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
