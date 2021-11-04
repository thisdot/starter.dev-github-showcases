import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import FileExplorer from './FileExplorer.data';
import { mockRepoTreeQuery } from './FileExplorer.mocks';
import { createWrapper } from '@lib/testUtils';

export default {
  component: FileExplorer,
  title: 'Components/FileExplorer',
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

const Template: Story<ComponentProps<typeof FileExplorer>> = (args) => (
  <FileExplorer {...args} />
);

export const RepoRootDir = Template.bind({});
RepoRootDir.args = {
  repo: 'testrepos',
  owner: 'testowner',
};

export const RepoSrcDir = Template.bind({});
RepoSrcDir.args = {
  repo: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: 'src',
};

export const RepoNotFound = Template.bind({});
RepoNotFound.args = {
  repo: 'fourohfour',
  owner: 'nobody',
};
