import { SetStoreFunction } from 'solid-js/store';
import createAuthStore, { StoreProps } from './AuthStore';

export type AuthStoreProps = StoreProps;

export type UseAuthProps = {
  authStore: StoreProps;
  setAuth: SetStoreFunction<StoreProps>;
};
const [authStore, setAuth] = createAuthStore;
export const useAuth = () =>
  ({
    authStore,
    setAuth,
  } as UseAuthProps);
