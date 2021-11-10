import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoTabNavigation from './RepoTabNavigation';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoTabNavigation,
  title: 'RepoPage/RepoTabNavigation',
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
    <RepoTabNavigation />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: true,
};
