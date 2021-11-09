import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import FileExplorer from './FileExplorer.data';
import { mockRepoTreeQuery } from './FileExplorer.mocks';
import { createWrapper } from '@lib/testUtils';
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
  <RepoProvider value={args}>
    <FileExplorer />
  </RepoProvider>
);

export const RepoRootDir = Template.bind({});
RepoRootDir.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: '',
};

export const RepoSrcDir = Template.bind({});
RepoSrcDir.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'src',
};

export const RepoNotFound = Template.bind({});
RepoNotFound.args = {
  name: 'fourohfour',
  owner: 'nobody',
};
