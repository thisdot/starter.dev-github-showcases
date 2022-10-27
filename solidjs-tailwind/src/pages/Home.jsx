import { useAuth } from '../auth';

const Home = () => {
  useAuth().preventUnauthorised();

  return (
    <h1 class="flex justify-center items-center text-white my-5 mx-auto bg-blue-500  w-full lg:w-[75%] p-4 text-lg ">
      SolidJs and Tailwind CSS Starter kit
    </h1>
  );
};

export default Home;
