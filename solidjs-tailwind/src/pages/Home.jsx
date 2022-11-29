import { TopRepos } from '../components/TopRepos';

const Home = () => {

  return (
    <div class="w-full min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100">
      <aside class="w-full lg:w-96 bg-white p-8">
        <span>Here will be the gists</span>
      </aside>
      <main class="max-w-screen-lg w-full">
        <div class="p-12">
          <h2 class="text-lg font-medium mb-4">Top Repositories</h2>
          <TopRepos repos={[]} />
        </div>
      </main>
    </div>
  );
};

export default Home;
