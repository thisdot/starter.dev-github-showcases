// function ProfileNav({ basePath, className, isOrg = false }: ProfileNavProps)

<template>
  <TabNavigation
    :tabs="tabList"
    :basePath="basePath"
    :className="className"
    :isOrg="isOrg"
  />
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'ProfileNav',
});
</script>

<script lang="ts" setup>
// import TabNavigation from '@components/TabNavigation';
import { tabList } from './tabList';

const props = defineProps({
  basePath: String,
  className: String,
  isOrg: Boolean,
});

// const isOrg = isOrg ? isOrg : false;
</script>
