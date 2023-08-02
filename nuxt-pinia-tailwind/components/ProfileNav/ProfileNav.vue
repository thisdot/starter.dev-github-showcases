<template>
  <div>
    <TabNavigation :tabs="tabList"></TabNavigation>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    tabList() {
      return [
        {
          title: 'Overview',
          path: `${this.$route.path}`,
          icon: 'GitOverviewIcon',
        },
        {
          title: 'Repositories',
          path: `${this.$route.path}?repositories`,
          icon: 'GitRepoIcon',
          label: this.$auth.user.public_repos,
        },
        {
          title: 'Stars',
          path: `${this.$route.path}?stars`,
          icon: 'StarIcon',
          label: this.$auth.user.stars_count,
        },
      ];
    },
  },
});
</script>
