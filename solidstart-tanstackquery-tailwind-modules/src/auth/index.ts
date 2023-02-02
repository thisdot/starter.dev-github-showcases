import { SetStoreFunction } from 'solid-js/store';
import createAuthStore, { StoreProps } from './AuthStore';

export type UseAuthProps = {
  authStore: SetStoreFunction<StoreProps> | StoreProps;
  setAuth: any;
};
const [authStore, setAuth] = createAuthStore;
export const useAuth = (): UseAuthProps => ({
  authStore,
  setAuth,
});
