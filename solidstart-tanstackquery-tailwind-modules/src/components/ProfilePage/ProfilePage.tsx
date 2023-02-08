import { Show, splitProps } from 'solid-js';
import { useLocation } from 'solid-start/router';
import styles from './ProfilePage.module.css';
import { ProfileNav } from '~/components/ProfileNav';
import { UserProfile as UserProfileType } from '~/types/user-profile-type';
import { PageInfo, UserRepo } from '~/types/user-repo-type';
import UserProfile from '../UserProfile';

type ProfilePageProps = {
  user: UserProfileType;
  reposInfo: {
    pageInfo: PageInfo;
    repos: UserRepo[];
  };
};

const ProfilePage = (props: ProfilePageProps) => {
  const location = useLocation();
  const [local] = splitProps(props, ['reposInfo', 'user']);

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
          <div
            data-testid="user-profile"
            class="pt-8 relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3"
          >
            <Show when={local.user}>
              <UserProfile {...local.user} />
            </Show>
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav
              pathname={location.pathname}
              class="border-none md:hidden"
            />
            <Show when={local.reposInfo}>
              <span>Here should be the repos list</span>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
