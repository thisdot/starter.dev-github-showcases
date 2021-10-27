import type { GetServerSideProps, NextPage } from 'next';
import type { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import WelcomeUser from '@components/WelcomeUser';
import MyRepoList from '@components/MyRepoList';

const Home: NextPage<{ session: Session }> = ({ session }) => {
  return (
    <div>
      <Head>
        <title>GitHub Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-auto">
        <WelcomeUser name={session!.user!.name!} />
        <MyRepoList />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/auth/signin',
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Home;
