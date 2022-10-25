import { component$ } from '@builder.io/qwik';
import { UserProfileCard } from './user-profile-card';

export default component$(() => {
  const testUser = {
    avatarUrl: '//avatars.githubusercontent.com/u/2487968?v=4',
    bio: 'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="//github.com/thisdot">@thisdot</a>',
    company: '@thisdot',
    followers: { totalCount: 24 },
    following: { totalCount: 20 },
    starredRepositories: { totalCount: 3 },
    location: 'Washington, DC',
    login: 'tvanantwerp',
    name: 'Tom VanAntwerp',
    twitterUsername: 'tvanantwerp',
    websiteUrl: '//tomvanantwerp.com',
    organizations: {
      nodes: [
        {
          avatarUrl: '//avatars.githubusercontent.com/u/22839396?v=4',
          login: 'thisdot',
        },
      ],
    },
  };
  return <UserProfileCard {...testUser} />;
});
