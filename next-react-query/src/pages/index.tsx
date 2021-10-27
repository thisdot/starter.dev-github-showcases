import type { GetServerSideProps, NextPage } from 'next';
import type { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { WelcomeUser } from '../components/WelcomeUser';

const Home: NextPage<{ session: Session }> = ({ session }) => {
  return (
    <div>
      <Head>
        <title>GitHub Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WelcomeUser name={session!.user!.name!} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return session
    ? {
        props: {
          session,
        },
      }
    : {
        redirect: {
          permanent: false,
          destination: '/api/auth/signin',
        },
      };
};

export default Home;
