import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import NavBar from './NavBar';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: NavBar,
  title: 'Components/NavBar',
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
    <NavBar />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {};
