<template>
  <q-avatar class="avatar--user" :style="userAvatarStyle"></q-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAvatar',
});
</script>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

//* Stores
import { useUserStore } from '@/store/userStore';

const props = defineProps({
  size: {
    type: String,
    default: null,
  },
});

const currentUser = useUserStore();

const userAvatarStyle = computed(() => {
  let style: Record<string, unknown> = {
    backgroundImage: `url(${currentUser.$state.profileImg})`,
  };

  if (props.size) {
    style = { ...style, height: props.size, width: '100%' };
  }

  return style;
});
</script>

<style scoped>
.avatar--user {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
