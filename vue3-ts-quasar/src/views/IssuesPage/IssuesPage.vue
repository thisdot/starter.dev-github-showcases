<template>
  <div>
    <Issues
      :username="route.params.username"
      :issuename="route.params.issuename"
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
