<template>
  <div>
    <OrganizationRepos :organization="route.params.orgname" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrganizationRepoPage',
});
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { OrganizationRepos } from '@/components';
const route = useRoute();
</script>
