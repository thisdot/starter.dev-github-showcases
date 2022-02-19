<template>
  <div class="search_container">
    <form>
      <AppInput v-model="search" placeholder="Find a repository..." />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppInput from '../AppInput';

export default defineComponent({
  name: 'SearchInput',
  components: { AppInput },
  setup() {
    const search = ref('');

    return { search };
  },
});
</script>

<style lang="scss" src="./searchinput.scss"></style>
