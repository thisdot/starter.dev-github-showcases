import ProfileNav from "../ProfileNav/ProfileNav";
import UserProfileView, {
  UserProfileViewProps,
} from "../UserProfile/UserProfile.view";
import UserReposView, { Repositories } from "../UserRepos/UserRepos.view";
import * as styles from "./ProfilePage.classNames";

interface ProfilePageProps {
  userProfileData: any;
  owner: string;
  pathname: string;
}

function ProfilePage({ userProfileData, owner, pathname }: ProfilePageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.stickyNav}>
        <div className={styles.gridNav}>
          <div className="col-span-12 md:col-span-4 xl:col-span-3" />
          <div className={styles.profileNav}>
            <ProfileNav className="border-none" pathname={pathname} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3">
            <UserProfileView {...userProfileData} />
          </div>
          <div className="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav className="border-none md:hidden" pathname={pathname} />
            <UserReposView repos={userProfileData.repositories} owner={owner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
