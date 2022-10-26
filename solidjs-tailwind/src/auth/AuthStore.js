import { createStore } from 'solid-js/store';

const [authStore, setAuth] = createStore({
  token: null,
  get isAuthenticated() {
    return !!this.token;
  },
});

export default authStore;
