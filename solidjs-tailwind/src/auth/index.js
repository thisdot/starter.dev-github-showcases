import createAuthStore from './AuthStore';
import ROUTES from '../routes';
import createPreventUnauthorised from './preventUnauthorised';

const [authStore, setAuth] = createAuthStore();
const preventUnauthorised = createPreventUnauthorised(authStore, ROUTES.SIGNIN);
export const useAuth = () => ({
  authStore,
  preventUnauthorised,
});
