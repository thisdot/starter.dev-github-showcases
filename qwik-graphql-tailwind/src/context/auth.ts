import { createContext } from '@builder.io/qwik';

export interface AuthProps {
  authToken: string;
}

const authStore = createContext<AuthProps>('auth-context');

export default authStore;
