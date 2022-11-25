import { NavLink, Link } from '@solidjs/router';
import { useAuth } from '../auth';

const Home = () => {
const { authStore } = useAuth();

  return (
    <>
      <h1 class="flex justify-center items-center text-white my-5 mx-auto bg-blue-500  w-full lg:w-[75%] p-4 text-lg ">
        SolidJs and Tailwind CSS Starter kit
      </h1>
      <p class="w-full lg:w-[75%] p-4 mx-auto">Welcome {authStore.user.login}</p>
      <Link href='/profile'>Profile</Link>
      <NavLink href='/profile'>Profile</NavLink>
    </>
  );
};

export default Home;
