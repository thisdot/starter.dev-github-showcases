import { useNavigate } from '@solidjs/router';
import { createEffect, onCleanup } from 'solid-js';

const Redirect = () => {
  const route = useNavigate();
  createEffect(() => {
    const timer = setTimeout(() => {
      const last_visted_path = sessionStorage.getItem('auth_return_path');
      const isAuthPage = last_visted_path.includes('signin');
      const to = isAuthPage ? '/' : last_visted_path;
      route(to, { replace: true });
    }, 3000);
    onCleanup(() => clearTimeout(timer));
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
