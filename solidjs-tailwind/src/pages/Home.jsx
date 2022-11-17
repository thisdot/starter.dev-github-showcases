import { createResource, Show } from 'solid-js';
import { useAuth } from '../auth';
import { useOctokit } from '../github';

const Home = () => {
  useAuth().preventUnauthorised();

  const [data] = createResource(() => {
    try {
      return useOctokit()
        .rest.users.getAuthenticated()
        .then((response) => response.data);
    } catch {
      return Promise.resolve({});
    }
  });

  return (
    <>
      <h1 class="flex justify-center items-center text-white my-5 mx-auto bg-blue-500  w-full lg:w-[75%] p-4 text-lg ">
        SolidJs and Tailwind CSS Starter kit
      </h1>
      <Show when={!data.loading} keyed>
        <p class="w-full lg:w-[75%] p-4 mx-auto">Welcome {data().login}</p>
      </Show>
    </>
  );
};

export default Home;
