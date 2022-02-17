<template>
  <div class="profile-card">
    <div class="avatar_name_bio">
      <div class="avatar">
        <img :src="avatarUrl" alt="avatar" />
      </div>
      <div class="name_bio">
        <span class="name">
          {{ name }}
        </span>
        <span class="login">
          {{ login }}
        </span>
      </div>
    </div>
    <p class="bio">
      {{ bio }}
    </p>
    <div class="divider" />
  </div>
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
    login: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" src="./userprofilecard.scss"></style>
