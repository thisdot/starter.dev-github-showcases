import { SetStoreFunction, createStore } from 'solid-js/store';
import { isServer } from 'solid-js/web';

export type StoreProps = {
  token: string | null;
  user: Record<string, string> | null;
  isAuthenticated: boolean;
};

const [authStore, setAuth] = createStore<StoreProps>({
  token: !isServer && window.sessionStorage.getItem('token'),
  user: null,
  get isAuthenticated() {
    return !!this.token;
  },
});

export default [
  authStore as StoreProps,
  setAuth as SetStoreFunction<StoreProps>,
];
