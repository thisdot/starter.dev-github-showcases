<template>
  <div class="py-8 border-t border-b">
    <h3 class="font-semibold">Gists</h3>
    <div class="mt-3">
      <div v-for="gist in gists" :key="gist.id" class="mb-4">
        <a :href="gist.html_url" class="text-blue-500 hover:underline">
          {{ gist.description }}
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import defineComponent from 'vue';
import { useUserStore } from '~/store/userStore';

export default new defineComponent({
  name: 'UserGists',
  setup() {
    const userStore = useUserStore();
    useUserStore().getUserGists();
    return {
      gists: userStore.gists,
    };
  },
});
</script>
