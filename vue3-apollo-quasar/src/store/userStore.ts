import { defineStore } from 'pinia';
import { useUser } from '@/composables';

//
import { useToken } from '@/composables';

const { getAuthToken } = useToken();
const { getCurrentUser } = useUser();

export const useUserStore = defineStore('userStore', {
  state: () => ({}),
  getters: {
    currentUser: () => getCurrentUser().data,
    username() {
      return this.currentUser.value.login;
    },
    profileImgUrl() {
      return this.currentUser.value.avatarUrl;
    },
    isLoggedIn: () => !!getAuthToken(),
  },
});
