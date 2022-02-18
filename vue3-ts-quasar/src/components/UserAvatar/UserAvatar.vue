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
// import { useUserStore } from '../../store/userStore';

const props = defineProps({
  size: {
    type: Number,
    default: null,
  },
  unit: {
    type: String,
    default: 'px',
  },
  img: {
    type: String,
    default: 'https://place-hold.it/64x64',
  },
});

// const currentUser = useUserStore();

const userAvatarStyle = computed(() => {
  // ${currentUser.$state.profileImg}
  let style: Record<string, unknown> = {
    backgroundImage: `url(${props.img})`,
  };

  if (props.size) {
    style = {
      ...style,
      height: `${props.size}${props.unit}`,
      width: `${props.size}${props.unit}`,
    };
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
