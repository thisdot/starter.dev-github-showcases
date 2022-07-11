<template>
  <div class="repo_search_header" v-if="!changing">
    <SearchInput />
    <SearchDropdowns dropdownType="type" />
    <SearchDropdowns dropdownType="language">
      <template v-slot:languages>
        <q-item
          clickable
          @click="updateLanguageRef(defaultLanguageSort)"
          v-close-popup
          class="row items-center m-list text-capitalize"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': filteredLanguage() !== defaultLanguageSort }"
          >
            <q-icon
              v-show="filteredLanguage() === defaultLanguageSort"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ defaultLanguageSort }}
        </q-item>
        <q-item
          v-for="(language, index) in languages"
          :key="index"
          clickable
          v-close-popup
          @click="updateLanguageRef(language.name)"
          class="row items-center text-capitalize"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': filteredLanguage() !== language.name }"
          >
            <q-icon
              v-show="filteredLanguage() === language.name"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ language.name }}
        </q-item>
      </template>
    </SearchDropdowns>
    <SearchDropdowns dropdownType="sort" />
    <div>
      <a href="https://github.com/new" class="flexbox new_repo">
        <q-icon
          class="text-h5 custom-icon"
          name="svguse:app-icons/book.svg#book"
        ></q-icon>
        <span class="new_repo_btn"> {{ repoBtnText }} </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { SearchDropdowns, SearchInput } from '@/components';
import { defaultLanguageSort } from './data';
import { filteredLanguage } from '@/globals/filteredLanguage';

export default defineComponent({
  name: 'SearchFilter',
  props: {
    repoBtnText: {
      type: String,
      default: 'New',
    },
    languages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    SearchInput,
    SearchDropdowns,
  },
  setup() {
    const changing = ref(false);
    const updateLanguageRef = (value) => {
      changing.value = true;

      filteredLanguage(value);
      changing.value = false;
    };
    return {
      defaultLanguageSort,
      updateLanguageRef,
      changing,
      filteredLanguage,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../App.css';
@import '@/styles/quasar.variables.scss';

.repo_search_header {
  display: flex;
  flex-flow: column;
  padding: 16px 0;
  border-bottom: 1px solid $secondary-300;

  @media (min-width: 1024px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 4px;
    }
  }
  .custom-icon {
    transform: translate(0, 0.3rem);
  }
  .new_repo {
    background-color: #2ea44f;
    color: #fff;
    display: flex;
    position: relative;
    padding: 7px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #fff;
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
      width: unset;
      justify-content: space-between;
    }
    margin-left: unset;
    text-decoration: none;

    margin-top: 10px;

    @media (min-width: 1024px) {
      margin-top: unset;
    }

    .new_repo_btn {
      padding-left: 5px;
    }

    svg {
      fill: #fff;
    }

    @media (min-width: 1024px) {
      margin-left: 10px;
    }
  }
}

.m-list {
  border-bottom: 1px solid $secondary-300;
}
</style>
