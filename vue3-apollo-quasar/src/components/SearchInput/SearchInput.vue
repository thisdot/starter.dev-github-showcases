<template>
  <div class="search_container">
    <form>
      <AppInput v-model="searchRef" placeholder="Find a repository..." />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { AppInput } from '../';
import { search } from '@/globals/search';

export default defineComponent({
  name: 'SearchInput',
  components: { AppInput },
  setup() {
    const searchRef = ref('');

    watchEffect(() => search(searchRef.value));

    return { searchRef };
  },
});
</script>

<style lang="scss" scoped>
@import '../../App.css';

.search_container {
  width: 100%;
  @media (min-width: 1024px) {
    margin-right: 20px !important;
  }
  input {
    padding: 6px 12px;
    border: 1px solid var(--color-border);
    width: 100%;
    border-radius: 6px;
    background: #fff;
    -webkit-transition: 0.1s ease-out;
    transition: 0.1s ease-out;
    &::-webkit-input-placeholder {
      color: #6a737d;
      font-family: inherit;
    }
    &:-ms-input-placeholder {
      color: #6a737d;
      font-family: inherit;
    }
    &::-ms-input-placeholder {
      color: #6a737d;
      font-family: inherit;
    }
    &::placeholder {
      color: #6a737d;
      font-family: inherit;
    }
    &:focus {
      border: 1px solid #0366d6;
      -webkit-box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
      box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    }
  }
}
</style>
