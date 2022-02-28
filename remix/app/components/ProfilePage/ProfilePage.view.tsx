import type { ReactNode } from 'react';
import UserProfileView, { UserProfileViewProps } from '../UserProfile/UserProfile.view';
import { Repo } from '../UserRepos/types';
import UserReposView from '../UserRepos/UserRepos.view';
import * as styles from './ProfilePage.classNames'

interface ProfilePageProps {
  user:  UserProfileViewProps;
  owner: string;
  repos: Repo[]
}

function ProfilePage({ repos, user, owner }: ProfilePageProps) {
  return (
        <div className={styles.container}>
          <div className={styles.stickyNav}>
            <div className={styles.gridNav}>
              <div className="col-span-12 md:col-span-4 xl:col-span-3" />
              <div className={styles.profileNav}>
               Header
              </div>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto py-8 px-4">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4 xl:col-span-3 relative md:-top-20 z-20">
              <UserProfileView {...user} />
              </div>
              <div className="col-span-12 md:col-span-8 xl:col-span-9">
                Search
              <UserReposView repos={repos} owner={owner} />
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProfilePage;
