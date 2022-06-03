import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoReadMe from './RepoReadMe.data';
import { mockRepoReadMeQuery } from './RepoReadMe.mocks';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoReadMe,
  title: 'RepoPage/RepoReadMe',
  parameters: {
    msw: [mockRepoReadMeQuery],
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
    <RepoReadMe />
  </RepoProvider>
);

export const NoReadMe = Template.bind({});
NoReadMe.args = {
  name: 'noreadme',
  owner: 'testowner',
  branch: 'main',
  path: '',
};

export const HasReadMe = Template.bind({});
HasReadMe.args = {
  name: 'react',
  owner: 'facebook',
  branch: 'main',
  path: '/',
};
