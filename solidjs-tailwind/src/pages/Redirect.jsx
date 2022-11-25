import { useNavigate } from '@solidjs/router';
import { createEffect, onCleanup } from 'solid-js';

const Redirect = () => {
  const route = useNavigate();
  createEffect(() => {
    const timer = setTimeout(() => {
      route('/');
    }, 1000);
    onCleanup(() => clearTimeout(timer));
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
