import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import ProfilePage from '@components/ProfilePage';
import UserProfile from '@components/UserProfile';
import ProfileNav from '@components/ProfileNav';
import UserRepos from '@components/UserRepos';

const UserProfilePage: NextPage = () => {
  const { query, pathname } = useRouter();
  return (
    <ProfilePage owner={query.owner}>
      {({ username }) => (
        <div className="relative pt-8">
          <div className="border-b border-gray-200 sticky top-0 bg-white z-20  hidden md:block">
            <div className="grid grid-cols-12 gap-8 max-w-screen-2xl mx-auto">
              <div className="col-span-12 md:col-span-4 xl:col-span-3" />
              <div className="col-span-12 md:col-span-8 xl:col-span-9">
                <ProfileNav basePath={pathname} className="border-none" />
              </div>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto py-8 px-4">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4 xl:col-span-3 relative md:-top-20">
                <UserProfile username={username} />
              </div>
              <div className="col-span-12 md:col-span-8 xl:col-span-9">
                <ProfileNav
                  basePath={pathname}
                  className="border-none md:hidden"
                />
                <UserRepos username={username} />
              </div>
            </div>
          </div>
        </div>
      )}
    </ProfilePage>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default UserProfilePage;
