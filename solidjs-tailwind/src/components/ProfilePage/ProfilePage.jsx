import { ProfileNav } from '../ProfileNav';
import { UserProfileCard } from '../UserProfileCard';
import { UserRepos } from '../UserRepos';
import styles from './Profile.module.css';

const ProfilePage = (props) => {
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
            {props.user ? <UserProfileCard {...props.user} /> : null}
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav
              class="border-none md:hidden"
              pathname={location.pathname}
            />
            {props.repos ? (
              <UserRepos
                repos={props.repos.repos}
                // owner={location.params.user}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
