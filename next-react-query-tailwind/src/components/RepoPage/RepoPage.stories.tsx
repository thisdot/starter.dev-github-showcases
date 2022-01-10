import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
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

const Template: Story<ComponentProps<typeof RepoPage>> = (args) => (
  <RepoPage {...args} />
);

export const Home = Template.bind({});
Home.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: '',
  children: <RenderContextValue />,
};

export const WithPath = Template.bind({});
WithPath.args = {
  name: 'testrepos',
  owner: 'testowner',
  branch: 'main',
  path: ['src', 'components'],
  children: <RenderContextValue />,
};

export const NotFound = Template.bind({});
NotFound.args = {
  name: 'fourohfour',
  owner: 'nobody',
  children: <RenderContextValue />,
};
