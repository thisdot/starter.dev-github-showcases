import { createPinia } from 'pinia';
import { useUserStore } from '../store/userStore';
interface Next {
  (data?: string | null): void;
}
const pinia = createPinia();
const user = useUserStore(pinia);

function isLoggedIn() {
  return user.isLoggedIn;
}

export const requiresAuth = (
  to: { name: string },
  from: { fullPath: string },
  next: Next,
): void => {
  if (isLoggedIn()) {
    next();
  } else {
    next('/auth');
  }
};
export const requiresNoAuth = (
  to: { name: string },
  from: { fullPath: string },
  next: Next,
): void => {
  if (isLoggedIn()) {
    next('/');
  } else {
    next();
  }
};
