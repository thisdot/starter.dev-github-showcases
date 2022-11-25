import { createStore } from 'solid-js/store';

const createAuthStore = () =>
  createStore({
    token: null,
    user: null,
    get isAuthenticated() {
      return !!this.token;
    },
  });

export default createAuthStore;
