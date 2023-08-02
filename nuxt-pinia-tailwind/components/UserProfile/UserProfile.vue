<template>
  <div>
    <div class="w-[260px] h-[260px]">
      <img
        :src="userProfile.avatar"
        alt="Avatar"
        width="260"
        height="260"
        class="absolute rounded-full shadow z-30"
      />
    </div>
    <h1 class="mt-2">
      <div class="text-2xl text-gray-800 font-bold leading-tight">
        {{ userProfile.name }}
      </div>
      <div class="text-xl text-gray-500 font-light">
        {{ userProfile.username }}
      </div>
    </h1>
    <div class="text-gray-800 mt-4">{{ userProfile.bio }}</div>
    <div class="text-sm text-gray-600 my-4">
      <UsersIcon class="w-4 h-4 mb-0.5 mr-1 inline" />
      <span class="inline-block">
        <span class="font-medium text-gray-900">{{
          userProfile.followers
        }}</span>
        followers
      </span>
      <span class="mx-1">·</span>
      <span class="inline-block">
        <span class="font-medium text-gray-900">{{
          userProfile.following
        }}</span>
        following
      </span>
    </div>
    <div class="text-sm text-gray-800 space-y-1">
      <div v-if="userProfile.company">
        <OfficeBuildingIcon class="w-4 h-4 mb-0.5 mr-1 inline" />
        {{ userProfile.company }}
      </div>
      <div v-if="userProfile.location">
        <LocationMarkerIcon class="w-4 h-4 mb-0.5 mr-1 inline" />
        {{ userProfile.location }}
      </div>
      <div v-if="userProfile.websiteUrl">
        <LinkIcon class="w-4 h-4 mb-0.5 mr-1 inline" />
        <a
          class="hover:text-blue-600 hover:underline"
          :href="userProfile.websiteUrl"
          target="_blank"
          rel="noreferrer"
        >
          {{ userProfile.websiteUrl }}
        </a>
      </div>
      <div v-if="userProfile.twitterUsername">
        <TwitterLogo class="w-4 h-4 mb-0.5 mr-1 inline" />
        <a
          class="hover:text-blue-600 hover:underline"
          :href="`https:/twitter.com/${userProfile.twitterUsername}`"
          target="_blank"
          rel="noreferrer"
        >
          @{{ userProfile.twitterUsername }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    userProfile() {
      return {
        avatar: this.$auth.user.avatar_url,
        name: this.$auth.user.name,
        username: this.$auth.user.login,
        bio: this.$auth.user.bio,
        followers: this.$auth.user.followers,
        following: this.$auth.user.following,
        company: this.$auth.user.company,
        location: this.$auth.user.location,
        websiteUrl: this.$auth.user.website_url,
        twitterUsername: this.$auth.user.twitter_username,
      };
    },
  },
});
</script>
