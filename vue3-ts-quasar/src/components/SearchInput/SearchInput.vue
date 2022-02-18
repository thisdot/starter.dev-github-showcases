<template>
  <div class="search_container">
    <form>
      <input placeholder="Find a repository..." />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
});
</script>

<style lang="scss" src="./searchinput.scss"></style>
