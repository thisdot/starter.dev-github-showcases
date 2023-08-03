/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import UserTopRepos from '@components/UserTopRepos';
import UserGists from '@components/UserGists/UserGists.data';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GitHub Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full  min-h-[calc(100vh-165px)] flex flex-col-reverse lg:flex-row bg-gray-100">
        <aside className="w-full lg:w-96 bg-white p-8">
          <UserGists />
        </aside>
        <main className="max-w-screen-lg w-full">
          <div className="p-12">
            <h2
              data-testid="show repo list"
              className="text-lg font-medium mb-4"
            >
              Top Repositories
            </h2>
            <UserTopRepos />
          </div>
        </main>
      </div>
      <div className="flex justify-center mt-auto pb-5 pt-6">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.netlify.com"
        >
          <img
            src="https://www.netlify.com/v3/img/components/netlify-light.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default Home;
