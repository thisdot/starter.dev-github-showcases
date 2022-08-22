import { Story, Meta } from '@storybook/react';
import RepoReadMe from './RepoReadMe.view';
import { ComponentProps } from 'react';

export default {
  component: RepoReadMe,
  title: 'RepoPage/RepoReadMe',
} as Meta;

const Template: Story<ComponentProps<typeof RepoReadMe>> = (args) => (
  <RepoReadMe {...args} />
);

export const NoReadMe = Template.bind({});
NoReadMe.args = {
  readme: '',
};

export const HasReadMe = Template.bind({});
HasReadMe.args = {
  readme: `This demo application is a small re-implementation of some GitHub pages / functionality built using their GraphQL API.

  ## Table of Contents

  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Featured Tech Stack](#featured-tech-stack)
    - [Development Notes](#development-notes)
      - [Adding Storybook](#adding-storybook)
      - [Authenticating with GitHub](#authenticating-with-github)

  ## Overview

  ### Featured Tech Stack

  - [GraphQL](https://graphql.org/)
  - [React](https://reactjs.org)
  - [Remix](https://remix.run)
  - [Tailwind CSS](https://tailwindcss.com)

  ### Development Notes

  #### Adding Storybook

  To get Storybook working, I had to separately add a different bundler than worked with it. I choose the newer option to bundle Storybook with Vite, since it's a bit closer to esbuild which Remix uses. In the future, it might be possible to not include a separate bundler just for Storybook. [Storybook is not officially supported by Remix at this time](https://github.com/remix-run/remix/issues/214).

  #### Authenticating with GitHub

  This app uses an OAuth flow to authenticate with GitHub and use their API. You will need to create an OAuth GitHub app and use the provided client and secret IDs in
  .env. While developing locally, you will need to tunnel your webserver so that webhooks are available.`,
};
