import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
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
    <FileViewer />
  </RepoProvider>
);

export const JsonFile = Template.bind({});
JsonFile.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'package.json',
};

export const JsFile = Template.bind({});
JsFile.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'src/Navigator.js',
};

export const TextFile = Template.bind({});
TextFile.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: '.buckconfig',
};

export const BadPathError = Template.bind({});
BadPathError.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'bad/path',
};
