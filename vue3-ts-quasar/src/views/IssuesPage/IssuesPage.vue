<template>
  <div>
    <h1>Issues</h1>
    <Issues
      :username="route.params.username"
      :reponame="route.params.reponame"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IssuesPage',
});
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Issues } from '@/components';
const route = useRoute();
</script>
