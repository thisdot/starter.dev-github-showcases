<template>
  <h1>Organization Repos</h1>
</template>

<script lang="ts">
import { useOrganizationRepositories } from '@/composables';
import { defineComponent, defineProps, toRef } from 'vue';
export default defineComponent({
  name: 'OrganizationRepos',
});
</script>

<script lang="ts" setup>
const { getOrganizationRepositories } = useOrganizationRepositories();

const props = defineProps({
  organization: {
    type: String,
    required: true,
  },
});

const organization = toRef(props, 'organization');

const { data: organizationRepoData, loading: orgaizationRepoLoading } =
  getOrganizationRepositories(organization.value);
</script>
