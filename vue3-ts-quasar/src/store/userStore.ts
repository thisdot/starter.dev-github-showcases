import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    username: 'TestUsername',
    profileImg: 'https://place-hold.it/64x64',
  }),
});
