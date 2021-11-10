import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoActionButtons from './RepoActionButtons';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoActionButtons,
  title: 'RepoPage/RepoActionButtons',
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
  parameters: {
    nextRouter: {
      path: '[owner]/[name]',
      asPath: 'thisdot/starter.dev',
      query: {},
    },
  },
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoActionButtons />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: true,
};
