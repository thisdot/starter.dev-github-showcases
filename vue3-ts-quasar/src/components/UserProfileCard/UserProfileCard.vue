<template>
  <div>User Profile Card</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserProfileCard',
  props: {
    avatarUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" src="./userprofilecard.scss"></style>
