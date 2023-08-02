<template>
  <header class="bg-gray-900 flex justify-between items-center py-4 px-8">
    <nuxt-link to="/">
      <GithubLogo />
    </nuxt-link>
    <div
      v-closable="{ exclude: ['button'], handler: 'onClose' }"
      class="relative"
    >
      <button
        class="w-10 h-10 bg-slate-400 rounded-full"
        @click="showDropdown = !showDropdown"
      >
        <img
          :src="avatarURL"
          alt="user avatar"
          class="w-full h-full rounded-full"
        />
      </button>
      <div
        v-if="showDropdown"
        class="absolute right-0 top-12 bg-white rounded-lg w-40 z-40 shadow-lg"
      >
        <nuxt-link
          to="hdjerry"
          class="flex justify-center items-center p-2 font-medium text-center w-full"
          @click="onClose"
        >
          {{ username }}
        </nuxt-link>
        <button
          class="border-t border-t-slate-300 flex justify-center items-center p-2 w-full h-full cursor-pointer"
          @click="signOut"
        >
          Sign Out
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  useContext,
  ref,
  computed,
  defineComponent,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $auth } = useContext();
    const showDropdown = ref<boolean>(false);

    const onClose = () => {
      showDropdown.value = false;
    };

    const signOut = async () => {
      try {
        await $auth.logout();
      } catch (error: any) {
        throw new Error(error);
      }
    };

    const avatarURL = computed(() => $auth.user.avatar_url);
    const username = computed(() => $auth.user.login);

    return {
      showDropdown,
      onClose,
      signOut,
      avatarURL,
      username,
    };
  },
});
</script>
