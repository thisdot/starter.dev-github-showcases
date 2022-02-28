import { defineStore } from 'pinia';

//
import { useToken } from '@/composables';

const { getAuthToken } = useToken();

export const useUserStore = defineStore('userStore', {
  state: () => ({
    username: 'TestUsername',
    profileImg: 'https://place-hold.it/64x64',
  }),
  getters: {
    isLoggedIn: () => !!getAuthToken(),
  },
});
