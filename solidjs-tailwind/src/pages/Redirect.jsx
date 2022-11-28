import { useNavigate } from '@solidjs/router';
import { createEffect, createResource } from 'solid-js';
import { useAuth } from '../auth';
import getProfile from '../services/get-profile';

const Redirect = () => {
  const route = useNavigate();
  const { authStore, setAuth } = useAuth();
  const [data] = createResource(getProfile);
  createEffect(() => {
    if (!data.loading && data()) {
      setAuth({...authStore, user: data()})
      route('/');
    }
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
