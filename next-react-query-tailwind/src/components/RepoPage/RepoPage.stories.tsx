import type { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RepoPage from './RepoPage.data';
import { mockRepoPageQuery } from './RepoPage.mocks';
import { createWrapper } from '@lib/testUtils';
import RenderContextValue from './RenderContextValue';

export default {
  component: RepoPage,
  title: 'RepoPage/RepoPage',
  parameters: {
    msw: [mockRepoPageQuery],
  },
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

export const Home = {
  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: '',
    children: <RenderContextValue />,
  },
};

export const WithPath = {
  args: {
    name: 'testrepos',
    owner: 'testowner',
    branch: 'main',
    path: ['src', 'components'],
    children: <RenderContextValue />,
  },
};

export const NotFound = {
  args: {
    name: 'fourohfour',
    owner: 'nobody',
    children: <RenderContextValue />,
  },
};
