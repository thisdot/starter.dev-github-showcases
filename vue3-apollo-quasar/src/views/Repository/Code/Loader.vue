<template>
  <q-card flat bordered class="q-mt-md q-px-md q-py-md">
    <q-list>
      <q-item
        class="row justify-between items-center q-mb-xs"
        v-for="(_, index) in rows"
        :key="index"
      >
        <div class="bg-grey-2 file"></div>
        <div class="bg-grey-2 text"></div>
        <div class="bg-grey-2 text"></div>
      </q-item>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CodeLoader',
});
</script>
<script lang="ts" setup>
const rows = 5;
</script>

<style lang="scss" scoped>
.file {
  width: 1.5rem;
  height: 1.5rem;
}
.text {
  width: 6rem;
  height: 0.5rem;
}
</style>
