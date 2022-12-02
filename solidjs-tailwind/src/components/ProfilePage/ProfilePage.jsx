import { createEffect, createSignal, splitProps } from 'solid-js';
import useRepoSortFilter from '../../helper/useRepoSortFilter';
import { ProfileNav } from '../ProfileNav';
import { UserProfile } from '../UserProfile';
import { UserRepos } from '../UserRepos';
import styles from './Profile.module.css';

const ProfilePage = (props) => {
  const [local] = splitProps(props, ['reposInfo', 'user']);
  const [repoState, setRepoState] = createSignal([]);
  const [reposlanguages, setReposLanguages] = createSignal([]);

  createEffect(() => {
    const [reposResults, languages] = useRepoSortFilter(local.reposInfo.repos);
    setRepoState(reposResults);
    setReposLanguages(languages);
  });

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
            {local.user ? <UserProfile {...local.user} /> : null}
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav
              class="border-none md:hidden"
              pathname={location.pathname}
            />
            {local.reposInfo ? (
              <UserRepos languages={reposlanguages()} repos={repoState()} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
