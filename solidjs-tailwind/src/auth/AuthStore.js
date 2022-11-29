import { createStore } from 'solid-js/store';
const storage = window.sessionStorage || sessionStorage;

const [authStore, setAuth] = createStore({
  token: storage.getItem('token'),
  user: null,
  get isAuthenticated() {
    return !!this.token;
  },
});

export default [authStore, setAuth];
