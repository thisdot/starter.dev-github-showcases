import type { ComponentProps } from 'svelte';
import ProfileAboutSection from './ProfileAboutSection.svelte';

type ProfileAboutSectionProps = ComponentProps<ProfileAboutSection>;

export default {
  component: ProfileAboutSection,
  title: 'components/ProfileAboutSection',
};

const Template = (props: ProfileAboutSectionProps) => ({
  Component: ProfileAboutSection,
  props,
});

const storyProps = {
  profile: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    bio: 'There once was...',
    blog: 'https://github.com/blog',
    collaborators: 8,
    company: 'GitHub',
    createdAt: '2008-01-14T04:33:35Z',
    diskUsage: 10000,
    email: 'octocat@github.com',
    followers: 20,
    following: 0,
    gravatarId: '',
    hireable: false,
    id: 1,
    location: 'San Francisco',
    login: 'octocat',
    name: 'monalisa octocat',
    nodeId: 'MDQ6VXNlcjE=',
    ownedPrivateRepos: 100,
    plan: {
      collaborators: 0,
      name: 'Medium',
      privateRepos: 20,
      space: 400,
    },
    privateGists: 81,
    publicGists: 1,
    publicRepos: 2,
    siteAdmin: false,
    totalPrivateRepos: 100,
    twitterUsername: 'monatheoctocat',
    type: 'User',
    updatedAt: '2008-01-14T04:33:35Z',
    url: 'https://api.github.com/users/octocat',
  },
  organizations: [
    {
      avatarUrl: 'https://avatars.githubusercontent.com/u/9919?s=64&v=4',
      description: 'A great organization',
      id: 1,
      login: 'github',
      nodeId: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
    },
    {
      avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
      description: 'This Dot Labs',
      id: 2289396,
      login: 'thisdot',
      nodeId: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
      url: 'https://api.github.com/orgs/thisdot',
    },
  ],
};

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.args = storyProps;
