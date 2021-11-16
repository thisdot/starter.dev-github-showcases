import { useRouter } from 'next/router';
import ProfilePage from '@components/ProfilePage';
import UserProfile from '@components/UserProfile';
import ProfileNav from '@components/ProfileNav';

const UserProfilePage = () => {
  const { query, pathname } = useRouter();
  return (
    <ProfilePage owner={query.owner}>
      {({ username }) => (
        <>
          <div className="max-w-screen-2xl mx-auto py-8 px-4">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4 xl:col-span-3">
                <UserProfile username={username} />
              </div>
              <div className="col-span-12 md:col-span-8 xl:col-span-9">
                <ProfileNav className="sticky bg-white" basePath={pathname} />
              </div>
            </div>
          </div>
        </>
      )}
    </ProfilePage>
  );
};

export default UserProfilePage;
