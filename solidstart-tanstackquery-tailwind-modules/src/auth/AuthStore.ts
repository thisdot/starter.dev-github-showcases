import { createStore } from 'solid-js/store';
import { isServer } from 'solid-js/web';

const isToken = !isServer && window.sessionStorage.getItem('token');

export type StoreProps = {
  token: string | null;
  user: Record<string, string> | null;
  isAuthenticated: boolean;
};

const [authStore, setAuth] = createStore<StoreProps>({
  token: isToken || null,
  user: null,
  get isAuthenticated() {
    return !!this.token;
  },
});

export default {
  authStore,
  setAuth,
};
