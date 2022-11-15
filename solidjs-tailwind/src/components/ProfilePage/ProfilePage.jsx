import * as styles from './profile-page.classNames';
import { ProfileNav } from '../ProfileNav';
import { UserProfileCard } from '../UserProfileCard';

const ProfilePage = () => {
  const user = {
    avatarUrl:
      'https://avatars.githubusercontent.com/u/14813235?u=725486a429826f83adf3dd5dbe53c3a4fafeeede&v=4',
    bio: 'Software Engineer.',
    company: 'This Dot Labs',
    location: 'Madrid, Spain',
    login: 'ThisDot',
    name: 'This Dot',
    followers: {
      totalCount: 10,
    },
    following: {
      totalCount: 10,
    },
    starredRepositories: {
      totalCount: 100,
    },
    twitterUsername: 'thisdot',
  };

  return (
    <div class={styles.container}>
      <div class={styles.stickyNav}>
        <div class={styles.gridNav}>
          <div class="col-span-12 md:col-span-4 xl:col-span-3" />
          <div class={styles.profileNav}>
            <ProfileNav class="border-none" pathname={location.pathname} />
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-screen-2xl py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="pt-8 relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3">
            {user ? <UserProfileCard {...user} /> : 'Loading...'}
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav
              class="border-none md:hidden"
              pathname={location.pathname}
            />
            {/* This component was created on other PR, should be updated after merge */}
            {/* {props.user?.repositories ? (
              <UserRepos
                repos={props.user?.repositories}
                owner={location.params.user}
              />
            ) : (
              'Loading...'
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
