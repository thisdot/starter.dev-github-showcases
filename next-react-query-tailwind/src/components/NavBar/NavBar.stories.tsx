import type { RepoContext } from '../../context/RepoContext';
import { Meta, StoryFn } from '@storybook/react';
import NavBar from './NavBar';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';
import { SessionProvider } from 'next-auth/react';

export default {
  component: NavBar,
  title: 'Components/NavBar',
  decorators: [
    (Story: StoryFn) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
} as Meta;

const Template: StoryFn<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <SessionProvider
      session={{
        user: {
          name: 'test',
          email: 'test@test.com',
        },
        expires: '',
      }}
    >
      <NavBar />
    </SessionProvider>
  </RepoProvider>
);

export const Default = {
  render: Template,
};
