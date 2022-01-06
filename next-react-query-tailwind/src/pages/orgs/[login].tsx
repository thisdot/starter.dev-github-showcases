import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import ProfilePage from '@components/ProfilePage';
import ProfileNav from '@components/ProfileNav';
import UserRepos from '@components/UserRepos';
import OrgProfile from '@components/OrgProfile';

const OrgProfilePage: NextPage = () => {
  const { query, pathname } = useRouter();
  return (
    <ProfilePage owner={query.login}>
      {({ username }) => (
        <div className="relative">
          <div className="border-b border-gray-200 pt-2 bg-gray-50">
            <div className="max-w-screen-xl mx-auto">
              <OrgProfile username={username} />
              <ProfileNav basePath={pathname} className="border-none" isOrg />
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto py-8 px-4">
            <UserRepos username={username} isOrg />
          </div>
        </div>
      )}
    </ProfilePage>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default OrgProfilePage;
