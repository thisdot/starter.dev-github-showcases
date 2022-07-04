<template>
  <div>
    <PullRequestTab @changeTab="changeTab" />
    <!-- 
      Todo: Header section
        {number} open with icon
        {number} closed with icon
        label dropdown (does not need options)
        sort dropdown (does not need options)
     -->

     <!-- 
      Todo: Body section
      toggle open and close
      -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PullRequestTabView',
});
</script>
<script lang="ts" setup>
import PullRequestTab from './PullRequestTab.vue';

const changeTab = (tab) => {
  console.log(tab);
};
</script>
