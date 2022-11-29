import createAuthStore from './AuthStore';

const [authStore, setAuth] = createAuthStore;
export const useAuth = () => ({
  authStore,
  setAuth,
});
