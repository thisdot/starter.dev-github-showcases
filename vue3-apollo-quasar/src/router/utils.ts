import { createPinia } from 'pinia';
import { useUserStore } from '../store/userStore';

const pinia = createPinia();
const user = useUserStore(pinia);

function isLoggedIn() {
  return user.isLoggedIn;
}

export const requiresAuth = (to, from, next): void => {
  if (isLoggedIn()) {
    next();
  } else {
    next('/auth');
  }
};
export const requiresNoAuth = (to, from, next): void => {
  if (isLoggedIn()) {
    next('/');
  } else {
    next();
  }
};
