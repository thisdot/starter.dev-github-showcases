import { createStore } from 'solid-js/store';

export type StoreProps = {
  token: string | null;
  user: any;
  isAuthenticated: boolean;
}

const [authStore, setAuth] = createStore<StoreProps>({
  token: null,
  user: null,
  get isAuthenticated() {
    return !!this.token;
  },
});

export default [authStore, setAuth];
