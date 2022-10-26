import { useNavigate } from '@solidjs/router';
import { authStore } from '../auth';
import ROUTES from '../routes';

const Home = () => {
  /** We can probably extract this logic and have a one-liner for each page */
  const navigate = useNavigate();
  if (!authStore.isAuthenticated) {
    navigate(ROUTES.SIGNIN, { replace: true });
  }

  return (
    <h1 class="flex justify-center items-center text-white my-5 mx-auto bg-blue-500  w-full lg:w-[75%] p-4 text-lg ">
      SolidJs and Tailwind CSS Starter kit
    </h1>
  );
};

export default Home;
