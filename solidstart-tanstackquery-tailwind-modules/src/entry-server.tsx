import {
  StartServer,
  createHandler,
  renderAsync,
} from 'solid-start/entry-server';
import protectedPaths from './utils/protected-paths';
import { redirect } from 'solid-start';
import { useAuth } from './auth';
import { StoreProps } from './auth/AuthStore';

export default createHandler(
  ({ forward }) => {
    return async (event) => {
      const { authStore }: { authStore: StoreProps } = useAuth();
      if (
        protectedPaths.includes(new URL(event.request.url).pathname) &&
        !authStore.isAuthenticated
      ) {
        return redirect('/signin'); // a page for a non logged in user
      }
      return forward(event); // if we got here, and the pathname is inside the `protectedPaths` array - a user is logged in
    };
  },

  renderAsync((event) => <StartServer event={event} />)
);
