import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import ProfilePage from '@components/ProfilePage';
import ProfileNav from '@components/ProfileNav';
import UserRepos from '@components/UserRepos';

const OrgProfilePage: NextPage = () => {
  const { query, pathname } = useRouter();
  return (
    <ProfilePage owner={query.login}>
      {({ username }) => (
        <div className="relative pt-8">
          <div className="border-b border-gray-200 sticky top-0 bg-white z-20  hidden md:block">
            <div className="max-w-screen-2xl mx-auto">
              <ProfileNav basePath={pathname} className="border-none" />
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto py-8 px-4">
            <UserRepos username={username} isOrg />
          </div>
        </div>
      )}
    </ProfilePage>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default OrgProfilePage;
