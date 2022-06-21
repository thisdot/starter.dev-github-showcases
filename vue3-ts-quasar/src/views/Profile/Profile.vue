<template>
  <!-- <div class="q-pr-lg q-pl-lg">
  </div> -->
  <div style="position: relative; padding-top: 2rem">
    <div
      style="
        border-bottom-width: 1px;
        border-color: rgb(229 231 235 / 1);
        position: sticky;
        top: 0px;
        background-color: rgb(255 255 255 / 1);
        z-index: 20;
        display: none;
      "
    >
      <div
        style="
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 2rem;
          max-width: 1536px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <div style="grid-column: span 12 / span 12" />
        <div style="grid-column: span 12 / span 12">
          <!-- <ProfileNav :basePath="pathname" class="border-none" /> -->
        </div>
      </div>
    </div>
    <div
      style="
        max-width: 1536px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
      "
    >
      <div
        style="
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 2rem;
        "
      >
        <div style="grid-column: span 12 / span 12; position: relative">
          <UserProfileCard :username="route.params.username" />
        </div>
        <div style="grid-column: span 12 / span 12">
          <!-- <ProfileNav :basePath="pathname" className="border-none md:hidden" /> -->
          <UserRepos :username="route.params.username" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import {
  UserProfileCard,
  UserRepos,
  // ProfileNav
} from '@/components';

const route = useRoute();
</script>
